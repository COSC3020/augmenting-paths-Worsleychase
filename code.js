function augmentingPath(graph, start, end) {
    if (start == end) {
        return [start];
    }

    let visited = new Set();
    let predecessor = new Map();
    let queue = [start];

    visited.add(start);
    
    // do BFS search
    while (queue.length > 0) {
        let current = queue.shift();
        let neighbors = graph[current] || {};
        
        // check each neighbor
        for (let neighbor in neighbors) {
            if (neighbors[neighbor] > 0 && !visited.has(neighbor)) {
                predecessor.set(neighbor, current);
                visited.add(neighbor);
                queue.push(neighbor);
                
                if (neighbor == end) {
                    let path = [];
                    let currentNode = end;

                    while (currentNode != undefined) {
                        path.unshift(currentNode);
                        currentNode = predecessor.get(currentNode);
                    }
                    return path;
                }
            }
        }
    }
    return [];
}
