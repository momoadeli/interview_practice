
function generate2DSpiral(dim) {

  let twoDArray = new Array(dim).fill(0).map(() => new Array(dim).fill(0));

  function loop(_twoDArray, _dim, _agg) {

    if (_dim < 1) {
      return _twoDArray
    } else {
      let startingPosition = (dim - _dim) / 2;
      let endingPosition = dim - startingPosition - 1;
      let _lAgg = _agg
      // populate top row
      for (let i = startingPosition; i <= endingPosition; i++) {
        _lAgg++
        _twoDArray[startingPosition][i] = _lAgg
      }
      // populate right col
      for (let i = startingPosition + 1; i <= endingPosition; i++) {
        _lAgg++
        _twoDArray[i][endingPosition] = _lAgg
      }

      // populate bottom row
      for (let i = endingPosition - 1; i >= startingPosition; i--) {
        _lAgg++
        _twoDArray[endingPosition][i] = _lAgg
      }
      // populate left col
      for (let i = endingPosition - 1; i >= startingPosition + 1; i--) {
        _lAgg++
        _twoDArray[i][startingPosition] = _lAgg
      }
      loop(_twoDArray, _dim - 2, _lAgg)
    }
  }

  loop(twoDArray, dim, 0)

  return twoDArray
}

let twoDSpiralArray = generate2DSpiral(10)

console.log('spiral 2d array');
