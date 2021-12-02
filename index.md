## Advent of Code 2021

### What is it?
Advent of Code is a program where you are provided 2 puzzles that you must solve by writing a program. Typically the puzzles take around 10-20 minutes per day. You can also choose to compete with other people.

### Competitions
I am currently competing with other Blade & Sorcery modders, which you can see [here](https://adventofcode.com/2021/leaderboard/private/view/1610467)

### Days I have completed
So far, it's just December 1st. Not much yet, hopefully this website will look a lot better by Christmas.
Here's what I've got so far:
```js
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
```

Which gave an output of:
`total depth increases:  1233
total sum increases:  1275`

That's both puzzles compelted for today, got me 9 points! That puts me in fourth place as of December 1st. Still a while to go though.

