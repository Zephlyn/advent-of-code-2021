var fs = require("fs");
var input = fs.readFileSync("./Day 2/input.txt").toString().split("\n").map((x) => String(x));
var currentIndex;
var horizontal = 0;
var depth = 0;


for(var i = 0; i < input.length; i++){
  currentIndex = input[i];
  if(currentIndex.includes("forward")) {
  	horizontal += parseInt(currentIndex.slice(8,9));
  } else if (currentIndex.includes("up")) {
  	depth += parseInt(currentIndex.slice(3,4));
  } else {
  	depth -= parseInt(currentIndex.slice(5,6));
  }
}

console.log(`Horizontal value: ${horizontal}\n Depth value: ${depth}`);
