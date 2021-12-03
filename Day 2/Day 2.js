var fs = require("fs");
var input = fs.readFileSync("./Day 2/input.txt", { encoding: "utf-8" }).split("\n").filter((x) => Boolean(x)).map((x) => {
  var [direction, val] = x.split(" ");
  return {
    direction,
    val: parseInt(val)
  };
});
var horizontal = 0;
var depth = 0;
var aim = 0;

for (const line of input) {
  switch (line.direction) {
    case "forward":
      horizontal += line.val;
      break;
    case "up":
      depth -= line.val;
      break;
    case "down":
      depth += line.val;
      break;
  }
}
console.log(`Horizontal value: ${horizontal}\n Depth value: ${depth}\n Aim value: ${aim}`);
console.log(`The answer for part 1 is ${horizontal * depth}`);

horizontal = 0;
depth = 0;
aim = 0;

for (const line of input) {
  switch (line.direction) {
    case "forward":
      horizontal += line.val;
      depth += (line.val * aim);
      break;
    case "up":
      aim -= line.val;
      break;
    case "down":
      aim += line.val;
      break;
  }
}

console.log(`Horizontal value: ${horizontal}\n Depth value: ${depth}\n Aim value: ${aim}`);
console.log(`The answer for part 2 is ${horizontal * depth}`);