Pascal's triangle
From Wikipedia, the free encyclopedia




In Pascal's triangle, each number is the sum of the two numbers directly above it.


In mathematics, Pascal's triangle is a triangular array of the binomial coefficients. In much of the Western world, it is named after the French mathematician Blaise Pascal, although other mathematicians studied it centuries before him in India, Persia (Iran), China, Germany, and Italy.

The rows of Pascal's triangle are conventionally enumerated starting with row n = 0 at the top (the 0th row). The entries in each row are numbered from the left beginning with k = 0 and are usually staggered relative to the numbers in the adjacent rows. The triangle may be constructed in the following manner: In row 0 (the topmost row), there is a unique nonzero entry 1. Each entry of each subsequent row is constructed by adding the number above and to the left with the number above and to the right, treating blank entries as 0. For example, the initial number in the first (or any other) row is 1 (the sum of 0 and 1), whereas the numbers 1 and 3 in the third row are added to produce the number 4 in the fourth row.

Formula

A diagram that shows Pascal's triangle with rows 0 through 7.


The entry in the nth row and kth column of Pascal's triangle is denoted with:

{\tbinom {n}{k}}



For example, the unique nonzero entry in the topmost row is {\tbinom {0}{0}}=1



With this notation, the construction of the previous paragraph may be written as follows:

{n \choose k}={n-1 \choose k-1}+{n-1 \choose k},
for any non-negative integer n and any integer k between 0 and n, inclusive. This recurrence for the binomial coefficients is known as Pascal's rule.

Pascal's triangle has higher dimensional generalizations. The three-dimensional version is called Pascal's pyramid or Pascal's tetrahedron, while the general versions are called Pascal's simplices.
