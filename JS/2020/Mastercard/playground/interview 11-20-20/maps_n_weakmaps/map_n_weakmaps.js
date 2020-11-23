const m = new Map();

m.set('a',2);

console.log('m is ', m);

const o1 = {obj1: 1};
const o2 = {obj1: 1};

m.set(o1, 1);

console.log('m is ', m);

const oo1 = m.get(o1);

console.log('oo1 is ', oo1)

const oo2 = m.get(o2);

console.log('oo2 is ', oo2);

// note garbage collection is different map vs weakmap. In the latter case unreferences objects (mandatory keys) are garbage collected

let go = { john: 1}

ngm = new Map(); // Maps are note garbege collected ...:

ngm.set(go, 1);

go = null;  // delete go but it will not be gc'd since in Map

console.log('no garbage collected map is: ', ngm);

let gc = { john: '11111'}

const gcm = new WeakMap();

gcm.set(gc, 1);

console.log(' garbage colllected map ocntent ', gc);

gc = null
console.log(' MAYBE garbage collected weakmap has changed if js`s gc were active ', gcm);
console.log('did gc happen yet?', gcm);

