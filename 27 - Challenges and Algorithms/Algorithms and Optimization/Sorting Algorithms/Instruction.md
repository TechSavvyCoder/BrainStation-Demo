# Algorithms and Optimization: Sorting Algorithms
Sorting Algorithms are a classic way of testing for understanding of the issues involved in performance and complexity. Studying the [sorting algorithms on this](http://www.sorting-algorithms.com/) page is a great exercise in reviewing complexity.

## Big-O Notation for Sorting Algorithms
To apply the concept of Big-O Notation, we can look at the complexity of the sorting algorithms and determine what the Big-O value is. Note that the Big-O value represents the worst case scenario. While there is a change that in some cases an algorithm may perform better, in the worst case, the Big-O value is the best the algorithm can do. Algorithms with lower values have better performance. For example O(1) would be the best possible complexity, indicating that an algorithm only needed to run once to solve the problem.

|    Algorithm   | Big-O Notication |
|----------------|------------------|
| Selection Sort | O(n2)            |
| Insertion Sort | O(n)             |
| Quick Sort     | O(n log(n))      |

Note that while Big-O notation refers to the computing complexity of an algorithm in mathematical terms, in the real world, there are also other considerations such as how much memory an algorithm uses. A poorly written algorithm could theoretically work, but exhaust the memory of a computer before the problem is solved. Other considerations that impact the performance of an algorithm include the number of times the algorithm must read/write from the disk, or access data from a network. Both accessing the disk and the network are considered slow operations, so when writing solutions, minimizing the times required for resources on the disk/network is also part of optimizing algorithms.