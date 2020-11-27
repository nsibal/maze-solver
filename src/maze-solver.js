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

    return [up, down, left, right].filter(([x, y]) => this.canTraverse(x, y));
  }

  checkVisited (x, y, visited) {
    for (let pair of visited) {
      if (x === pair[0] && y === pair[1]) return true;
    }
    return false;
  }

  solve (x1, y1, x2, y2) {
    let stack = new Array();
    let visited = new Array();

    if (this.canTraverse(x1, y1)) {
      stack.push([x1, y1]);
      visited.push([x1, y1]);
    }

    while (stack.length != 0) {
      let [x, y] = stack.pop();

      if (x === x2 && y === y2) return true;

      let neighbors = this.getNeighbors(x, y).filter(([i, j]) => {
        return !this.checkVisited(i, j, visited);
      });

      neighbors.forEach(([i, j]) => {
        stack.push([i, j]);
        visited.push([i, j]);
      });
    }

    return false;
  }
}
