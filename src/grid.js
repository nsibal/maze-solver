class Grid {
  constructor (arr) {
    this.grid = _deepCopiedArr();

    function _deepCopiedArr () {
      var locArr = new Array(arr.length);

      arr.forEach((row, i) => {
        locArr[i] = Array.from(row);
      });

      return locArr;
    };
  }

  printArray () {
    for (var row of this.grid) {
      for (var ele of row) {
        process.stdout.write(ele === 0 ? `X ` : `O `);
      }
      console.log('');
    }
  }
}
