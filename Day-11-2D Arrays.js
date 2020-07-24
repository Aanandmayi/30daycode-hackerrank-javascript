var arr = [
    [0, -4, -6, 0, -7, -6],

    [-1 ,-2, -6, -8 ,-3, -1],

    [-8 ,-4, -2, -8, -8, -6],

    [-3, -1, -2 ,-5 ,-7 ,-4],

    [-3 ,-5, -3, -6, -6, -6],

[-3, -6, 0, -8, -6, -7]]
    

var max = 0
for (var k = 1; k < 5; k++) {
    for (var j = 1; j < 5; j++) {
        var total = arr[k - 1][j - 1] + arr[k - 1][j] + arr[k - 1][j + 1]
            +arr[k][j]
            + arr[k + 1][j - 1] + arr[k + 1][j] + arr[k + 1][j + 1]
        console.log(total);
        if (max < total) {
            max = total
        }
    }
    if (k == 4) {
        console.log(max)
    }
}