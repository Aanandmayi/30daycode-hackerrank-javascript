function processData(input) {
    //Enter your code here
    var arr = input.split("\n")

    var js = {

    }
    var arrone = parseInt(arr[0])
    for (var x = 1; x <= arrone; x++) {
        var temp = arr[x].split(" ")
        js[temp[0]] = temp[1]

        if (x == arrone) {
            for (var i = (1 + arrone); i < arr.length; i++) {
                var key = arr[i]
                if (js[key] != undefined) {
                    console.log(key + "=" + js[key])
                } else {
                    console.log("Not found")
                }
            }
        }
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
