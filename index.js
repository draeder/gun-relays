import Gun from 'gun'
import fetch from 'node-fetch'
import getUrls from 'get-urls'

// Suppress extraneous GUN logging
let cl = console.log
//console.log = () => {}

const Relays = async () => {

    let gun = new Gun({peers: ['https://relay.gun.ooo','https://gunjs.herokuapp.com'], file: 'gun-relays'})

    // check gun
    gun.get('gun-relays').get('relays').on(data => {
        if(!data) fetchRelays()
    })

    // if gun has no results, fetch them & update gun
    async function fetchRelays(){
        let res = await fetch('https://github.com/amark/gun/wiki/volunteer.dht/_edit')
        let data = await(res.text())
    
        let gunRelays = []
        let urls = getUrls(data)
        urls = Array.from(urls)
        urls.forEach(u => {
            let testUrl = new URL(u)
            if(testUrl.pathname === '/gun'){
                gunRelays.push(testUrl.href)
            }
        })
    
        gun.get('gun-relays').get('relays').put(JSON.stringify(gunRelays))
    
        console.log = cl
        return gunRelays
    }

    return fetchRelays()
    
}

export default Relays