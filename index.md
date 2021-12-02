## Advent of Code 2021

### What is it?
Advent of Code is a program where you are provided 2 puzzles that you must solve by writing a program. Typically the puzzles take around 10-20 minutes per day. You can also choose to compete with other people.

### Competitions
I am currently competing with other Blade & Sorcery modders, which you can see below:
```
1) 16 *  Quentin Bateux
2) 14 *  Wully616
3) 11 *  mtruitt1
4)  9 *  Zephlyn
5)  6 *  Dank Darko
6)  0 *  Neeshka76
7)  0 *  Talion Solaris
8)  0 *  Noah Zoog
```

### Days I have completed
So far, it's just December 1st. Not much yet, hopefully this website will look a lot better by Christmas. If you would like to view it on github, you can do so [here](https://github.com/Zephlyn/advent-of-code-2021/tree/main/Day%201)

# The scenario
You're minding your own business on a ship at sea when the overboard alarm goes off! You rush to see if you can help. Apparently, one of the Elves tripped and accidentally sent the sleigh keys flying into the ocean!

Before you know it, you're inside a submarine the Elves keep ready for situations like this. It's covered in Christmas lights (because of course it is), and it even has an experimental antenna that should be able to track the keys if you can boost its signal strength high enough.

As the submarine drops below the surface of the ocean, it automatically performs a sonar sweep of the nearby sea floor. On a small screen, the sonar sweep report (your puzzle input) appears: each line is a measurement of the sea floor depth as the sweep looks further and further away from the submarine.

For example, suppose you had the following report:
```
199
200
208
210
200
207
240
269
260
263
```
This report indicates that, scanning outward from the submarine, the sonar sweep found depths of 199, 200, 208, 210, and so on.

The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.

To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:
```
199 (N/A - no previous measurement)
200 (increased)
208 (increased)
210 (increased)
200 (decreased)
207 (increased)
240 (increased)
269 (increased)
260 (decreased)
263 (increased)
```
In this example, there are 7 measurements that are larger than the previous measurement.

How many measurements are larger than the previous measurement?

My answer to the puzzle was `1233`.
### Part Two

Considering every single measurement isn't as useful as you expected: there's just too much noise in the data.

Instead, consider sums of a three-measurement sliding window. Again considering the above example:
```
199  A      
200  A B    
208  A B C  
210    B C D
200  E   C D
207  E F   D
240  E F G  
269    F G H
260      G H
263        H
```
Start by comparing the first and second three-measurement windows. The measurements in the first window are marked `A (199, 200, 208)`; their sum is `199 + 200 + 208 = 607`. The second window is marked `B (200, 208, 210)`; its sum is `618`. The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.

Your goal now is to count the number of times the sum of measurements in this sliding window increases from the previous sum. So, compare A with B, then compare B with C, then C with D, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.

In the above example, the sum of each three-measurement window is as follows:
```
A: 607 (N/A - no previous sum)
B: 618 (increased)
C: 618 (no change)
D: 617 (decreased)
E: 647 (increased)
F: 716 (increased)
G: 769 (increased)
H: 792 (increased)
```
In this example, there are 5 sums that are larger than the previous sum.

Consider sums of a three-measurement sliding window. How many sums are larger than the previous sum?

My puzzle answer was `1275`.

### Code for Day 1
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
```
total depth increases:  1233
total sum increases:  1275
```
### End of Day 1
That's both puzzles compelted for today, got me 9 points! That puts me in fourth place as of December 1st. Still a while to go though.
