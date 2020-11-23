let arr = []

let obj = {john: 1};

arr.push(obj);

console.log('arr before gc w obj is ', arr);

obj = null;

console.log('arr after gc still holds on to obj is :', arr);

obj = {bob: 2};

let wm = new WeakMap();
wm.set(obj, 3);

console.log(' weakmap before gc is :', wm);

obj = null;

console.log('weakmap after gc WILL release object although it might not show: ', wm);

// FORMAL GC: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management


let obj2 = {        // main objedct has two references: obj2 and a
    a: {b: 2}
};

let y = obj2;   // y is 3d reference to main object

obj2 = 1;   // main object reference has been reduces to 1 (y only)

let z = y.a //a in main object now has a reference from z

y = null; // main object refernce down to 0 but still referenced dby z

z = null;   // main object dereferenced and will be garbage collected.
 


