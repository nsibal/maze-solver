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
}
