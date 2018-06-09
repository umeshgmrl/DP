<?php
/*Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.*/

function mixStart($str) {
	return substr($str,1, 2) == "ix";
}

echo mixStart("mix snacks").PHP_EOL;
echo mixStart("pix zsnacks").PHP_EOL;
echo mixStart("piz snacks").PHP_EOL;