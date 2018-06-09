<?php
/*Given two temperatures, return true if one is less than 0 and the other is greater than 100.

icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false*/

function icyHot($temp1, $temp2)
{
	if($temp1<0 && $temp2>100) return true;
	if($temp1>100 && $temp2<0) return true;
	return false;
}

echo icyHot(120, -1).PHP_EOL;
echo icyHot(-1, 120).PHP_EOL;
echo icyHot(2, 120).PHP_EOL;