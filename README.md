# gun-relays
Returns [volunteer GUN relays](https://github.com/amark/gun/wiki/volunteer.dht) for use in your decentralized apps.

## Usage

```js
npm i gun-relays
```

### Node
```js
import Relays from 'gun-relays'
import Gun from 'gun'

let relays = await Relays()

console.log(relays)

// Use the relays
let gun = new Gun({peers: relays})
```

### Browser
```js
// Coming soon
```

##
See the official Wiki here: https://github.com/amark/gun/wiki/volunteer.dht