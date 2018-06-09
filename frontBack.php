<?php
/*Given a string, return a new string where the first and last chars have been exchanged.

frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"*/

function frontBack($value)
{
	$firstChar = $value[0];
	$lastChar = $value[strlen($value)-1];
	$value[0] = $lastChar;
	$value[strlen($value)-1] = $firstChar;
	return $value;
}
echo frontBack("code").PHP_EOL;
echo frontBack("a").PHP_EOL;
echo frontBack("ab").PHP_EOL;