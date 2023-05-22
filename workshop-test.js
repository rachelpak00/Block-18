const sum = require('./workshop');

test ('adds 1 + 2 to equal 3', () => {
    expect (sum(1, 2)). toBe(3);
})