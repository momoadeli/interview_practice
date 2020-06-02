
console.log(`var (function scoping) vs let (block scoping)
    vars are called 'var or function scoping' because
    var declarations are accessible anywhere within their containing 
    function, module, namespace, or global scope. 
    ATTN!!: 'let's are BLOCK scoped rather than function scoped.`);

console.log(`the example below illustrates that var x (inside if block) 
             ccesible to the return x even though it was defined within an 'if'.`);


function fI(shouldInitialize: boolean) {
    // x is defined regardless of being inside if conditional!!
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

fI(true);  // returns '10'
fI(false); // returns 'undefined'

console.log(`however, return x will be uncompilable if we
            declare x with let: (commented out to compile!)`);


function fII(shouldInitialize: boolean) {
    // x is defined regardless of being inside if conditional!!
    if (shouldInitialize) {
        let x = 10;
    }

    // return x;
}