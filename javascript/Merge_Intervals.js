// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */

var merge = function (intervals) {
  let mergedArray = [];

  for (let i = 0; i < intervals.length; i++) {
    if (i !== intervals.length - 1 && intervals[i + 1][0] < intervals[i][0]) {
      mergedArray.push(intervals[i + 1]);
      i++;
      continue;
    }

    if (i === intervals.length - 1) {
      mergedArray.push(intervals[i]);
    } else if (intervals[i][1] >= intervals[i + 1][0]) {
      mergedArray.push([intervals[i][0], intervals[i + 1][1]]);
      i++;
    } else {
      mergedArray.push(intervals[i]);
    }
  }

  return mergedArray;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104
