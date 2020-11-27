const Grid = require('./grid.js');

module.exports = class MazeSolver extends Grid {
  constructor (arr) {
    super(arr);
  }

  canTraverse (x, y) {
    if (x < 0 || x >= this.grid.length) return false;
    if (y < 0 || y >= this.grid[x].length) return false;
    if (this.grid[x][y] === 0) return false;
    return true;
  }

  getNeighbors (x, y) {
    let up = [x, y - 1];
    let down = [x, y + 1];
    let left = [x - 1, y];
    let right = [x + 1, y];

    return [up, down, left, right].filter(neighbor => {
      let [x, y] = neighbor;
      return this.canTraverse(x, y);
    });
  }

  checkVisited (x, y, visited) {
    for (var pair of visited) {
      if (x === pair[0] && y === pair[1]) return true;
    }
    return false;
  }
}
