//two sum problem using two pointer method

var twoSum = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  const sortedNums = nums.slice(0).sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right];
    if (sum === target) {
      if (sortedNums[left] === sortedNums[right])
        return nums.reduce((acc, cv, index) => {
          if (acc.length === 2) return acc;
          return cv === sortedNums[left] ? [...acc, index] : acc;
        }, []);
      return [nums.indexOf(sortedNums[left]), nums.indexOf(sortedNums[right])];
    }
    if (sum > target) {
      left++;
    } else {
      right--;
    }
  }
};
