// alterbnativ
let dfs = function (grid, row, col) {

  grid[row][col] = null;

  //  check north:
  if (grid[row - 1] && grid[row - 1][col] === '1')
    dfs(grid, row - 1, col);

  //  check south:
  if (grid[row + 1] && grid[row + 1][col] === '1')
    dfs(grid, row + 1, col);

  //  check east:
  if (grid[row][col + 1] && grid[row][col + 1] === '1')
    dfs(grid, row, col + 1);

  // check west:
  if (grid[row][col - 1] && grid[row][col - 1 === '1'])
    dfs(grid, row, col - 1);

}

let numIslands = function (grid) {

  // WRITE YOUR CODE HERE
  let contiguousParks = 0;
  const PARK = 1;
  const VISITED = null;

  function depthFirstSearch(row, col) {

    if (grid[row][col] === PARK) {
      grid[row][col] = VISITED; // set cell to 'visited'
    } else {
      return; // end recursive call if not in park
    }

    // dfs/check south cell
    if (row < grid.length - 1) {
      depthFirstSearch(row + 1, col);
    }

    // dfs/check east cll
    if (col < grid[row].length - 1) {
      depthFirstSearch(row, col + 1);
    }

    // dfs/check north cell
    if (row > 0 && row < grid.length) {
      depthFirstSearch(row - 1, col);
    }

    // dfs/check west cell
    if (col > 0 && col < grid[row].length) {
      depthFirstSearch(row, col - 1);
    }
  }

  // this is technically a recursive DFS search to identify the park.
  // but intuitively you simple check every cell and it surrounding recursively
  // and if the cell is 1 ('a park') check around it in depth and pop recrusevly
  // out when hitting a commercial area.
  // Time complexity : O(M \times N)O(M×N) where MM is the number of rows and NN is
  // the number of columns.

  // Space complexity : worst case O(M \times N)O(M×N) in case that the grid map is filled
  // with lands where DFS goes by M \times NM×N deep.

  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (grid[i][j] === PARK) {
        contiguousParks++;
        depthFirstSearch(i, j);
      }
    })
  })

  return contiguousParks;

}

const grid =
  [['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']];

console.log(numIslands(grid));
