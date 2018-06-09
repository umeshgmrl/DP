<?php
/*Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"*/

function stringBits($str)
{
	$result = '';
	for ($i=0; $i < strlen($str); $i += 2) {
		$result = $result . $str[$i];
	}
	return $result;
}

echo stringBits("Hello").PHP_EOL;
echo stringBits("Hi").PHP_EOL;
echo stringBits("Heeololeo").PHP_EOL;