function validate()
{
  var pass1 = document.getElementById("password1").value;
  var pass2 = document.getElementById("password2").value;
  
  if((pass1.length < 8) || (pass2.length < 8))
  {
    alert("Passwords are not at least 8 characters long!");
  }
  else
  {
    if(pass1 != pass2)
    {
      alert("Passwords do not match!");
    }
    else
    {
      alert("Passwords match!");
    }
  }
}
