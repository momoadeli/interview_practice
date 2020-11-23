const am = objectify_manual = (key, value) => {
    let obj = {};
    obj[key] = value;
    return obj;
}

console.log(am(1,2));

const ap = objectify_props = (key, value) => {
    return {[key]: value};
}

console.log(ap(3,4));

const ac = objectify_complex_compute  = (key, value) => {
    return {[key + value]: value};
}

console.log(ac(8,9));

const { 21:b } = ac(10, 11);

console.log(b);

