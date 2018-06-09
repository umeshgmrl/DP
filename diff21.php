<?php
/*Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0 */

function diff21($n)
{
	$absoluteDifference = abs($n-21);
	if($n>21){
		return 2*$absoluteDifference;
	}
	return $absoluteDifference;
}

echo diff21(19).PHP_EOL;
echo diff21(10).PHP_EOL;
echo diff21(21).PHP_EOL;