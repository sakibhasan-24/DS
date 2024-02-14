const depthFirstSearch = (graph, starting) => {
  const stack = [starting];
  while (stack.length > 0) {
    const currentStarting = stack.pop();
    console.log(currentStarting);
    // now a will search his/her neighbour
    graph[currentStarting].forEach((neighbor) => {
      stack.push(neighbor);
    });
  }
};

const depthFirstSearchRecursive = (graph, starting) => {
  console.log(starting);
  //   search neighbour and base case for stop
  graph[starting].forEach((neighbor) => {
    depthFirstSearchRecursive(graph, neighbor);
  });
};
const breathFirstSearch = (graph, starting) => {
  const queue = [starting];
  while (queue.length > 0) {
    const currentStarting = queue.shift();
    console.log(currentStarting);
    // graph[currentString]=>graph['a']
    graph[currentStarting].forEach((neighbour) => {
      queue.push(neighbour);
    });
  }
};
const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
// depthFirstSearch(graph, "a");
depthFirstSearchRecursive(graph, "a");
console.log("------------------------------------------------------");
breathFirstSearch(graph, "a");

const hasRoad = (graph, source, destination) => {
  // use depth first search
  const stack = graph[source];
  if (source === destination) return true;
  while (stack.length > 0) {
    const currentSource = stack.pop();
    if (currentSource === destination) return true;
    graph[currentSource].forEach((neighbor) => {
      stack.push(neighbor);
    });
  }
  return false;
};

const hasRoadRecursive = (graph, source, destination) => {
  if (source === destination) return true;
  //   foreach can not do early terminate
  for (let neighbor of graph[source]) {
    if (hasRoadRecursive(graph, neighbor, destination)) return true;
  }
  return false;
};
const road = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log("------------------------------");
// console.log(hasRoadRecursive(road, "f", "k")); //true
const undirectedGraph = (edges, nodeA, nodeB) => {
  const graph = buildGraphFromEdges(edges);
  const stack = [nodeA];
  const visited = new Set();
  if (nodeA === nodeB) return true;
  if (visited.has(nodeA)) return false;

  while (stack.length > 0) {
    const currentNode = stack.pop();
    visited.add(currentNode);
    if (currentNode === nodeB) return true;
    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
  return false;
};
const buildGraphFromEdges = (edges) => {
  let myGraph = {};
  for (let [vertexOne, vertexTwo] of edges) {
    if (!(vertexOne in myGraph)) myGraph[vertexOne] = [];
    if (!(vertexTwo in myGraph)) myGraph[vertexTwo] = [];
    myGraph[vertexOne].push(vertexTwo);
    myGraph[vertexTwo].push(vertexOne);
  }
  return myGraph;
};
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedGraph(edges, "i", "j"));
//
/* 

 dynamic programming

*/

let cache = {};
const addNum = (num) => {
  if (cache[num]) {
    // console.log(cache[num], cache.num);
    console.log("already");
    return cache[num];
  } else {
    console.log("calculation------------");
    cache[num] = num + 1;
    return cache[num];
  }
};

// console.log(addNum(10));
// console.log(addNum(10));
// console.log(addNum(10));
