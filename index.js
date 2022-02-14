import Gun from 'gun'
import fetch from 'node-fetch'
import getUrls from 'get-urls'

// Suppress extraneous GUN logging
let cl = console.log
console.log = () => {}

// if gun has no results, fetch them from github & update gun
async function fetchRelays() {
  let tmpRelays = []
  let res = await fetch(
    'https://raw.githubusercontent.com/wiki/amark/gun/volunteer.dht.md'
  )
  let data = await res.text()
  let urls = getUrls(data)

  urls = Array.from(urls)
  urls.forEach((u) => {
    let testUrl = new URL(u)

    if (testUrl.pathname === '/gun' && testUrl.pathname.indexOf('~~') === -1) {
      tmpRelays.push(testUrl.href)
    }
  })

  return tmpRelays
}

const Relays = async () => {
  let gunRelays = []

  let gun = new Gun({
    peers: ['https://relay.gun.ooo', 'https://gunjs.herokuapp.com'],
    file: 'gun-relays',
  })

  // check gun first
  let results = await gun
    .get('gun-relays')
    .get('relays')
    .on((data) => {
      // apparently, don't have to do anything here
    })
    .then()

  if (results) gunRelays = JSON.parse(results)
  else {
    gunRelays = await fetchRelays()
    gun.get('gun-relays').get('relays').put(JSON.stringify(gunRelays))
  }

  // restore normal console logging
  console.log = cl

  return gunRelays
}

export const forceListUpdate = async () => {
  let gun = new Gun({
    peers: ['https://relay.gun.ooo', 'https://gunjs.herokuapp.com'],
    file: 'gun-relays',
  })

  const newRelays = await fetchRelays()

  gun.get('gun-relays').get('relays').put(JSON.stringify(newRelays))

  // restore normal console logging
  console.log = cl

  return newRelays
}

export default Relays
