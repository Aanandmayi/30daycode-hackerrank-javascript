var v = { s: '92', t: '212', h: '33' }
var c = ['s', 't']
for (var x = 0; x < 3; x++) {
    var key = c[x]
    console.log(v[key]) //unefined    why this is undefined ?
}
