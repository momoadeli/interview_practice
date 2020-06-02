function spiral(dim) {

  // create an n x n array and fill it with zeros (O(n))
  let array = new Array(dim).fill(0).map(() => new Array(dim).fill(0));


  function loop(_arr, _dim, _agg) {

    let startingPosition = (_arr.length - _dim)/2;
    let endingPosition = _arr.length - 1  - startingPosition;

    if (dim < 1) {

      return _arr;

    } else {
      // populateTop(_arr, startingPosition, startingPosition, endingPosition);
      // populateRight(_arr, endingPosition , startingPosition + 1, endingPosition);
      // populateBottom(_arr, endingPosition, endingPosition - 1, startingPosition);
      // populateLeft(_arr, startingPosition, endingPosition - 1 , startingPosition + 1);

      // loop(_arr, _dim - 2, _agg + 1);

    }

  }

  loop(array, dim, 0);

  // 0 0 0 0 0
  // 0 0 0 0 0
  // 0 0 0 0 0
  // 0 0 0 0 0
  // 0 0 0 0 0


}

spiral(4);
