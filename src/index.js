const MazeSolver = require('./maze-solver.js');

let arr = [
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
];

let maze = new MazeSolver(arr);
console.log("check solavable -> source (0, 1) and Dest (4, 3):")
console.log(maze.solve(0, 1, 4, 3));

console.log("check solavable -> source (0, 0) and Dest (4, 3):")
console.log(maze.solve(0, 0, 4, 3));

console.log("check solavable -> source (0, 1) and Dest (3, 3):")
console.log(maze.solve(0, 1, 3, 3));

console.log("check solavable -> source (0, 1) and Dest (4, 4):")
console.log(maze.solve(0, 1, 4, 4));
