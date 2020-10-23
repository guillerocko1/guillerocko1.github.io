function process(t) {
  var num, num_n1, celcius, farenheit;
  
  
  num = document.forms["myform"].elements["num"].value;
  
  if ( num == "") {
    document.myform.result.value =
      "Empty values are not allowed. \nPlease enter 1 integer numbers!!!";
    //alert("Empty values are not allowed. Please enter 3 integer numbers!!!");
    return false;
  }
  
  var letters = /^[(-9)-9]+$/;
  if (
    num.match(letters)
  ) {
    num_n1 = parseInt(num);
    if (t =='ctof')
    {
      
      document.forms["myform"].elements["textarea"].value = "C to F";
      farenheit = (9/5 * num_n1) + 32;
      document.forms["myform"].elements["result"].value =
       " The value in farenheit is : " + farenheit.toFixed(2);
    }
    else 
    {
      document.forms["myform"].elements["textarea"].value = "F to C";
      celcius = 5/9 * (num_n1-32);
      document.forms["myform"].elements["result"].value =
      "The value in celcius is : " + celcius.toFixed(2);
    }

  } else {
    document.myform.result.value =
      "Characters are not allowed. \nPlease enter 3 integer numbers!!!";
    //alert("Characters are not allowed. Please input integers only");
    return false;
  }
}
