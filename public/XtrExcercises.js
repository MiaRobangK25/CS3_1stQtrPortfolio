let scores = [];

// Add scores
scores.push(85, 92, 78, 90, 88);
console.log("Scores:", scores);

// Display all scores
for (let score of scores) {
  console.log("Score:", score);
}

// Find highest and lowest
let highest = scores[0];
let lowest = scores[0];

for (let score of scores) {
  if (score > highest) highest = score;
  if (score < lowest) lowest = score;
}

console.log("Highest score:", highest);
console.log("Lowest score:", lowest);

// Calculate average
let total = 0;
for (let score of scores) {
  total += score;
}
console.log("Average score:", total / scores.length);

// Sort scores
scores.sort(sort_rule);
function sort_rule(a,b) {
	a-b
}