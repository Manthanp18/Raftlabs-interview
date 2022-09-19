const findDegree = (u, v, adj) => {
  const degrees = [];
  // console.log(degrees);
  function findPath(u, v, adj) {
    console.log(u);
    let visited = new Array(adj.length).fill(false);
    let path = [];
    path.push(u);
    searchDFS(u, v, adj, visited, path);
  }

  function searchDFS(u, v, adj, visited, path) {
    visited[u] = true;
    if (u === v) {
      degrees.push([...path]);
    } else {
      for (let i = 0; i < adj[u].length; i++) {
        const y = adj[u][i];
        if (!visited[y]) {
          visited[y] = true;
          path.push(y);
          searchDFS(y, v, adj, visited, path);
          path.pop();
        }
      }
    }
    visited[u] = false;
  }

  findPath(u, v, adj);

  return degrees;
};

export default findDegree;
