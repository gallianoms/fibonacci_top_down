var fib_top_down = function (num) {
    var map = new Map();
    var deep = function (num) {
        if (num <= 1)
            return num;
        if (!map.has(num)) {
            map.set(num, deep(num - 1) + deep(num - 2));
        }
        return map.get(num);
    };
    return deep(num);
};
console.log(fib_top_down(4));
//# sourceMappingURL=main.js.map