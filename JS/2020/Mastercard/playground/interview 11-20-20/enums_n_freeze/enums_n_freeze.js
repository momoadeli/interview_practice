'use strict'
const myEnum = Object.freeze({
    1: 'employee',
    2: 'manager',
    3: 'vendor'
})

console.log('quasi enum is: ', myEnum);

myEnum['1'] = 'change'; // no errore but doesn't change. with 'use strict' throws an error

console.log('attempted change of myEnum ', myEnum);