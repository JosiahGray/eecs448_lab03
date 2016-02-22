function changeBorder()
{
	var red = document.getElementById("borderR").value;
	var green = document.getElementById("borderG").value;
	var blue = document.getElementById("borderB").value;
	var par = document.getElementById("myP");

	/*
	if(typeof red === "number")
	{
		red = parseInt(red);
		if(red > 255 || red < 0)
		{
			red = 0;
		}
	}
	else
	{
		red = 0;
	}

	if(typeof green === "number")
	{
		green = parseInt(green);
		if(green > 255 || green < 0)
		{
			green = 0;
		}
	}
	else
	{
		green = 0;
	}

	if(typeof blue === "number")
	{
		blue = parseInt(blue);
		if(blue > 255 || blue < 0)
		{
			blue = 0;
		}
	}
	else
	{
		blue = 0;
	}

	par.style.borderColor = rgb(red, green, blue);
	*/

	par.style.borderColor = "#" + red + green + blue;
}

function changeBackground()
{
	var red = document.getElementById("backR").value;
	var green = document.getElementById("backG").value;
	var blue = document.getElementById("backB").value;
	var par = document.getElementById("myP");

	/*
	if(typeof red === "number")
	{
		red = parseInt(red);
		if(red > 255 || red < 0)
		{
			red = 0;
		}
	}
	else
	{
		red = 0;
	}

	if(typeof green === "number")
	{
		green = parseInt(green);
		if(green > 255 || green < 0)
		{
			green = 0;
		}
	}
	else
	{
		green = 0;
	}

	if(typeof blue === "number")
	{
		blue = parseInt(blue);
		if(blue > 255 || blue < 0)
		{
			blue = 0;
		}
	}
	else
	{
		blue = 0;
	}
	*/

	//par.style.backgroundColor = rgb(red, green, blue);

	par.style.backgroundColor = "#" + red + green + blue;

}

function rgb(red, green, blue)
{
	return("rgb(" + red + "," + green + "," + blue + ")");
}
