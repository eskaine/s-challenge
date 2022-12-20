var sum_to_n_a = function(n) {
    if (n === 1) {
        return n;
    }

    return n + sum_to_n_a(n - 1);
};

var sum_to_n_b = function(n) {
    let sum = 0;

    while (n >= 1) {
        sum += n;
        n--;
    }

    return sum;
};

var sum_to_n_c = function(n) {
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
