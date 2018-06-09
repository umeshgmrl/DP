<?php 
/*Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.

backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"*/

function backAround($value)
{
	$lastChar = $value[strlen($value)-1];
	return $lastChar . $value . $lastChar;
}

echo backAround("cat").PHP_EOL;
echo backAround("Hello").PHP_EOL;
echo backAround("a").PHP_EOL;