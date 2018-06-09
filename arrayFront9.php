<?php
/*Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false*/

function arrayFront9($arr)
{
	for ($i=0; $i < 4; $i++) { 
		if($arr[$i] == 9){
			return true;
		}
	}
	return false;
}

echo arrayFront9([1, 2, 9, 3, 4]).PHP_EOL;
echo arrayFront9([1, 2, 3, 4, 9]).PHP_EOL;
echo arrayFront9([1, 2, 3, 4, 5]).PHP_EOL;