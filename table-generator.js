var factor = prompt("Enter the largest value of the factors: ");
var maxValue = parseInt(factor);
var row;
var column;
var i;

document.write("<h1><center>A multiplication table with "+factor+" as the greatest value of the factors</center></h1>");

for (column = 0; column <= maxValue ; column++) {
	document.write("<b>"+column+"\t");
	if (column >= maxValue){
		document.write("<br>");
		for (row = 1; row <= maxValue ; row++){
			document.write("<b>"+row+"\t</b>");
			for (i = 1; i <= maxValue ; i++){
				document.write(row * i+"\t");
				if (i >= maxValue){
					document.write("<br>")
				}
			}
		}
	}
}