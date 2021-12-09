# gun-relays
Returns volunteer GUN relays for use in your decentralized apps.

## Usage
```js
const dns = require('dns')

let result = dns.resolveTxt( 'gun.peer.ooo', (err, res) => {
    console.log(res)
})
```

##
[Submit a new issue to have your relay server added](https://github.com/draeder/gun-relays/issues)

See the official Wiki here: https://github.com/amark/gun/wiki/volunteer.dht
