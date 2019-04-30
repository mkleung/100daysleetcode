/*

https://leetcode.com/problems/big-countries/

A country is big if it has an area of bigger than 3 million square km or a population of more than 25 million.

Write a SQL solution to output big countries' name, population and area.

*/

select name, population, area
from World 
Where 
population > 25000000
OR 
area > 3000000