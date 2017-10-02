var factor = prompt("Enter the largest value of the factors as a positive integer: ");
var maxValue = parseFloat(factor);
var row;
var column;
var multiplier;
var check = Number.isInteger(maxValue);

if (check == true && maxValue > 0) {
	document.write("<h1><center>A multiplication table with "+maxValue+" as the greatest value of the factors</center></h1>");

	for (row = 0; row <= maxValue ; row++) {
		document.write("<b>"+row+"\t");
		if (row >= maxValue){
			document.write("<br>");
			for (column = 1; column <= maxValue ; column++){
				document.write("<b>"+column+"\t</b>");
				for (multiplier = 1; multiplier <= maxValue ; multiplier++){
					document.write(column * multiplier+"\t");
					if (multiplier >= maxValue){
						document.write("<br>")
					}
				}
			}
		}
	}
}

else {
	document.write("Input is not a positive integer.  Reload page to try again.");
}
