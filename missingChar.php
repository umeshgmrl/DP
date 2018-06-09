<?php 
/*Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"*/

function missingChar($value, $index)
{
	$firstPart = substr($value, 0,$index);
	$lastPart = substr($value, $index+1);
	return $firstPart . $lastPart;
}
echo missingChar("kitten", 1).PHP_EOL;
echo missingChar("kitten", 0).PHP_EOL;
echo missingChar("kitten", 4).PHP_EOL;

