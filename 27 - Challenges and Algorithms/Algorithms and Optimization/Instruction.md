# Algorithms and Optimization: Egg Drop Problem

The essence of what computers do is to process large sets of instructions in order to achieve a certain result. Those instructions are a collection of strategies used to get to the desired result. Formally those strategies, are called algorithms. To use another metaphor, algorithms are like recipes. Following the recipe will give you the meal you desire. Algorithms take time, and use resources. The more efficient an algorithm is, the better it is. Optimizing algorithms is the process of determining the most efficient use of time and resources to solve a problem. An interesting fact is that some problems are known to be unsolvable mathematically within the lifetime of the universe. Exponentially growing complexity mean that the problem becomes increasingly harder as the problem space grows (an example of this is the [Travelling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)) As an example of thinking about algorithms and efficiency, consider the following problem.

## Egg Drop Problem
You are given two eggs, and access to a 100-storey building. Both eggs are identical (and they are special eggs that can be dropped from higher than 2 inches without breaking). The aim is to find out the highest floor from which an egg will not break when dropped out of a window from that floor. If an egg is dropped and does not break, it is undamaged and can be dropped again. However, once an egg is broken, that's it for that egg.

If an egg breaks when dropped from floor `n`, then it would also have broken from any floor above that. If an egg survives a fall, then it will survive any fall shorter than that.

The question is: _What strategy should you adopt to minimize the number egg drops it takes to find the solution?_.

There are no tricks, gotchas or other devious ruses. Don't worry about issues related to terminal velocity, potential energy or wind resistance. This is a math puzzle plain and simple.