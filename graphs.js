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
