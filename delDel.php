<?php
/*Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

delDel("adelbc") → "abc"
delDel("adelHello") → "aHello"
delDel("adedbc") → "adedbc"*/

function delDel($str)
{
	//return substr($str, 1, 3) == 'del' ? substr($str, 0, 1) . substr($str, 4) : $str;

	if(substr($str, 1, 3) == 'del'){
		$result = $str[0] . substr($str, 4);
	} else {
		$result = $str;
	}
	return $result;
}

echo delDel("adelbc").PHP_EOL;
echo delDel("adelHello").PHP_EOL;
echo delDel("adedbc").PHP_EOL;

