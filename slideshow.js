function prev()
{
  var image = document.getElementById("pictureID");
  if(image.src.match("images/apple.jpg"))
  {
    image.src="images/rabidragon.jpg";
  }
  else if(image.src.match("images/rabidragon.jpg"))
  {
    image.src="images/koala.jpg";
  }
  else if(image.src.match("images/koala.jpg"))
  {
    image.src="images/cat.jpg";
  }
  else if(image.src.match("images/cat.jpg"))
  {
    image.src="images/pear.jpg";
  }
  else
  {
    image.src="images/apple.jpg";
  }
}

function next()
{
  var image = document.getElementById("pictureID");
  if(image.src.match("images/apple.jpg"))
  {
    image.src="images/pear.jpg";
  }
  else if(image.src.match("images/pear.jpg"))
  {
    image.src="images/cat.jpg";
  }
  else if(image.src.match("images/cat.jpg"))
  {
    image.src="images/koala.jpg";
  }
  else if(image.src.match("images/koala.jpg"))
  {
    image.src="images/rabidragon.jpg";
  }
  else
  {
    image.src="images/apple.jpg";
  }
}
