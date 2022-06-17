var MAX_SAFE_INTEGER = 10000000, current_dist = 0, curr_index = 3, min_index = 3, min_val = MAX_SAFE_INTEGER, src = 3;
var graph = [[0, 10, 5, 0, 0, 0],
            [10, 0, 20, 2, 2, 0],
            [5, 20, 0, 0, 3, 10],
            [0, 2, 0, 0, 5, 0],
            [0, 2, 3, 5, 0, 2],
            [0, 0, 10, 0, 2, 0]];
var final_dist = [MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 0, MAX_SAFE_INTEGER, MAX_SAFE_INTEGER];
var mset = [];
function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArray[middle] === key) {
            return middle;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}
for (var i = 0; i < 6; i++)
{
    for (var j = 0; j < 6; j++)
    {
        if (graph[curr_index][j] != 0 && binarySearch(mset, graph[curr_index][j]) == -1)
        {
            if (final_dist[j] > graph[curr_index][j] + current_dist)
            {
                final_dist[j] = graph[curr_index][j] + current_dist;
                if (min_val>graph[curr_index][j])
                {
                    min_val = graph[curr_index][j];
                    min_index = j;
                }
            }
        }
    }
    mset.push(min_index);
    mset.sort();
    current_dist = final_dist[min_index];
    curr_index = min_index;
    min_val = 10000000;
}
for (var i = 0; i < 6; i++)
{
    console.log(final_dist[i]);
    console.log(" ");
}