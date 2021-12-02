var fs = require("fs");
var numbers = fs.readFileSync("./input.txt").toString().split("\n").map((x) => parseInt(x));
var totalDepthIncreases = 0;
var totalSums = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] - numbers[i] > 0) totalDepthIncreases++;
    var a = numbers[i] + numbers[i + 1] + numbers[i + 2];
    var b = numbers[i + 1] + numbers[i + 2] + numbers[i + 3];
    if (b - a > 0) totalSums++;
}

console.log("total depth increases: ", totalDepthIncreases); console.log("total sum increases: ", totalSums);