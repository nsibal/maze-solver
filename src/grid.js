module.exports = class Grid {
  constructor (arr) {
    let _undefDimension = 6;
    let _randomValues = 2;
    this.grid = arr === undefined ? _randomArr() : _deepCopiedArr();

    function _randomArr() {
      let locArr = new Array(_undefDimension);

      for (let i = 0; i < _undefDimension; i++) {
        var row = new Array(_undefDimension);

        for (let j = 0; j < _undefDimension; j++) {
          row[j] = getRandomInt(_randomValues);
        }

        locArr[i] = row;
      }

      return locArr;
    }

    function getRandomInt (randomValues) {
      return Math.floor(Math.random() * Math.floor(randomValues));
    }

    function _deepCopiedArr () {
      let locArr = new Array(arr.length);

      arr.forEach((row, i) => {
        locArr[i] = Array.from(row);
      });

      return locArr;
    };
  }

  printArray () {
    for (let row of this.grid) {
      for (let ele of row) {
        process.stdout.write(ele === 0 ? `X ` : `O `);
      }
      console.log('');
    }
  }
}
