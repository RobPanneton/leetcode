const containsDuplicate = (nums: number[]): boolean =>
  nums.length !== new Set<number>(nums).size;

// const containsDuplicate = (nums: number[]): boolean => {
//     let s = new Set();
//     for (let i = 0; i < nums.length; i++) {
//       if (s.has(nums[i])) return true;
//       s.add(nums[i]);
//     }
//     return false;
//   };
