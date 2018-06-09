<?php
/*Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.

lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true*/

function lastDigit($a, $b)
{
	if($a%10 == $b%10){
		return true;
	}
	return false;
}

echo lastDigit(7, 17).PHP_EOL;
echo lastDigit(6, 17).PHP_EOL;
echo lastDigit(3, 113).PHP_EOL;