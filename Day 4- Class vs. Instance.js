process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Person(initialAge) {
    if (initialAge < 0) {
        console.log("Age is not valid, setting age to 0.")

        this.lAge = 0
    } else {
        this.lAge = initialAge
    }
    this.amIOld = function () {
        // Do some computations in here and print out the correct statement to the console
        if (this.lAge < 13) {
            console.log("You are young.")
        } else if (this.lAge >= 13 && this.lAge < 18) {
            console.log("You are a teenager.")
        } else {
            console.log("You are old.")
        }

    };
    this.yearPasses = function () {
        // Increment the age of the person in here
        this.lAge++
    };
}

function main() {

    var T = parseInt(readLine());
    for (i = 0; i < T; i++) {
        var age = parseInt(readLine());
        var p = new Person(age);
        p.amIOld();
        for (j = 0; j < 3; j++) {
            p.yearPasses();

        }
        p.amIOld();
        console.log("");
    }
}
