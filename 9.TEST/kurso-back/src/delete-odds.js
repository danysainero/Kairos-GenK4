export default function deleteOdds(nums) {
  return nums.filter((num) => num % 2 === 0);
}

