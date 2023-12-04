"use strict";
// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i, j]
//         }
//     }
//     return [];
// };
// function twoSum(nums: number[], target: number): number[] {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     console.log([...map.keys()]);
//     if ([...map.keys()].includes(target - nums[i]))
//       return [map.get(target - nums[i]), i];
//     map.set(nums[i], i);
//   }
//   return [];
// }
// const twoSum = (nums: number[], target: number): number[] => {
//   for (let i = 0; i < nums.length; i++) {
//     let numsT = [...nums];
//     numsT.splice(i, 1, 0.1);
//     if (numsT.includes(target - nums[i]))
//       return [i, numsT.indexOf(target - nums[i])];
//   }
//   return [-1, -1];
// };
const twoSum = (nums, target) => {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(target - nums[i]))
            return [nums.indexOf(target - nums[i]), i];
        set.add(nums[i]);
    }
    return [-1, -1];
};
console.log(twoSum([1, 2, 3], 5));
console.log(twoSum([2, 4, 3], 6));
console.log(twoSum([3, 3], 6));
