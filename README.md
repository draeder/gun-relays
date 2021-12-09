# gun-relays
Returns a TXT record from `gun.peer.ooo` containing volunteer GUN relays for use in your decentralized apps.

## Usage

### Node
```js
const dns = require('dns')

dns.resolveTxt( 'gun.peer.ooo', (err, res) => {
    console.log(res)
})
```

### Browser
```js
<script src="https://cdn.jsdelivr.net/npm/dohjs@latest/dist/doh.min.js"></script>
<script>
const resolver = new doh.DohResolver('https://1.1.1.1/dns-query')

resolver.query('gun.peer.ooo', 'TXT')
.then(response => {
    response.answers.forEach(ans => {
        let results = ans.data.toString()
        console.log(results)
    })
}).catch(err => console.error(err))
</script>
```

##
[Submit a new issue to have your relay server added](https://github.com/draeder/gun-relays/issues)

See the official Wiki here: https://github.com/amark/gun/wiki/volunteer.dht
