# Day 7

There is a one-dimensional garden of length N. In each position of the N length garden, a fountain has been installed. Given an array a[]such that a[i] describes the coverage limit of ith fountain. A fountain can cover the range from the position max(i – a[i], 1) to min(i + a[i], N). In beginning, all the fountains are switched off. The task is to find the minimum number of fountains needed to be activated such that the whole N-length garden can be covered by water.

Examples:

Input: a[] = {1, 2, 1}
Output: 1
Explanation:
For position 1: a[1] = 1, range = 1 to 2
For position 2: a[2] = 2, range = 1 to 3
For position 3: a[3] = 1, range = 2 to 3
Therefore, the fountain at position a[2] covers the whole garden.
Therefore, the required output is 1.

Input: a[] = {2, 1, 1, 2, 1}
Output: 2
