# gun-relays
Returns [volunteer GUN relays](https://github.com/amark/gun/wiki/volunteer.dht) for use in your decentralized apps.

## Usage

```js
npm i gun-relays
```

### Node
```js
import Relays, {forceListUpdate} from 'gun-relays'
import Gun from 'gun'

let relays = await Relays()

console.log(relays)

// Use the relays
let gun = new Gun({peers: relays})

// We can also force an update to the in-network data by pulling straight from the volunteer dht
let freshRelays = await forceListUpdate()
// The `Relays()` function is better suited for everyday use, but it greatly benefits the network if the data is refreshed every once in a while.
```


### Browser
```js
// Coming soon
```

##
See the official Wiki here: https://github.com/amark/gun/wiki/volunteer.dht