// WRITE YOUR CODE HERE
let contiguousParks = 0;
const INSIDE_PARK = 1;
const VISITED = null;

function depthFirstSearch(row, col) {

  if (grid[row][col] === INSIDE_PARK) {
    grid[row][col] = VISITED; // set cell to 'visited'
  } else {
    return; // end recursive call if not in park
  }

  //below dfs check north, east, south, and west cells surrounding
  // current cell
  // dfs/check north cell

  if (row > 0 && row < grid.length) {
    depthFirstSearch(row - 1, col);
  }

  // dfs/check east cll
  if (col < grid[row].length - 1) {
    depthFirstSearch(row, col + 1);
  }

  // dfs/check south cell
  if (row < grid.length - 1) {
    depthFirstSearch(row + 1, col);
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
grid.forEach((row, i) => {
  row.forEach((cell, j) => {
    if (grid[i][j] === INSIDE_PARK) {
      contiguousParks++;
      depthFirstSearch(i, j);
    }
  })
})

return contiguousParks;
