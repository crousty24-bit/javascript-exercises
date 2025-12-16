const fibonacci = function(n) {
    n = Number(n);
    if (isNaN(n) || n < 0) return "OOPS"; // handles strings, else error 

    const first = 0; // 0e terme
    const second = 1; // 1st terme
    // conditions to make sure accepts any sequence : 
    // (0, 1) (1, 1) or (1, 2)
    if (n === 0) return first;
    if (n === 1) return second;

    let a = first;
    let b = second;
    let c;
    // loop starts at the second :
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b ;
        b = c ;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
