/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    while (n) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[--m];
          } else {
            nums1[m + n - 1] = nums2[--n];
          }
      }

      return nums1;
};

/*

- Initialize a while loop that will run as long as n is greater than 0.
- Check if the last element of nums1 is greater than the last element of nums2.
- If it is, we decrement m and then swap the last element of nums1 with the last element of nums2.
- If it isn’t, we decrement n and then swap the last element of nums1 with the last element of nums2.
- Finally, we return nums1.

*/

