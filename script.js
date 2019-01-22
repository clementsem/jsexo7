function myFunction() {

  var shoe = document.getElementById("shoeSize").value;
  var birth = document.getElementById("yearOfBirth").value;
  var result = ((((shoe*2)+5)*50)-birth)+1766;
  alert(result);
}
