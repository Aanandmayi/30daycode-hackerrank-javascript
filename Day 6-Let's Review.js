function processData(input) {
    //Enter your code here
    var inputarr = input.split("\n")
    for (var x = 1; x <= inputarr.length - 1; x++) {
        var str1 = ""
        var str2 = ""
        for (var i = 0; i < inputarr[x].length; i++) {
            if (i % 2 == 0) {
                str1 = str1 + inputarr[x][i]
            } else {
                str2 = str2 + inputarr[x][i]
            }
            if ((i + 1) == inputarr[x].length) {
                console.log(str1 + " " + str2)
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
