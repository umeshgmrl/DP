<?php
/*Given a non-empty string like "Code" return a string like "CCoCodCode".

stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"*/

function stringSplosion($str)
{
	$result = '';
	for ($i=0; $i < strlen($str); $i++) { 
		$result .= substr($str, 0,$i+1);
	}
	return $result;
}

echo stringSplosion("Code").PHP_EOL;
echo stringSplosion("abc").PHP_EOL;
echo stringSplosion("ab").PHP_EOL;