function Question(x) {
  var num, num1, answer, result;
  
  document.getElementById("num").style.display = "none";
  document.getElementById("num1").style.display = "none";
  //document.getElementById("num").style.visibility = "hidden";
  //document.getElementById("num1").style.visibility = "hidden";
  
  if(x=='start')
  {
      num = Math.floor((Math.random() * 9) + 1);
      num1 = Math.floor((Math.random() * 9) + 1);
     //alert("Start!!"  + num + " - " + num1);
      document.forms["myform"].elements["num"].value=num;
      document.forms["myform"].elements["num1"].value=num1;
      document.forms["myform"].elements["textarea"].value="How much is " + num + " times " + num1;
      document.myform.answer.focus();
      
  }  
  else if (x=='run')
  {
      //num = Math.floor((Math.random() * 9) + 1);
      //num1 = Math.floor((Math.random() * 9) + 1);
      result = document.forms["myform"].elements["num"].value * document.forms["myform"].elements["num1"].value;
      var item1 = document.forms["myform"].elements["answer"].value;                                                
      var answer = parseInt(item1);
      //result = num * num1;                                                  
      //alert("Run!!" + result + " - " + num + " - " + num1);
      if (answer == result)
      {
        alert("The answer is correct!!!");
        var request = prompt("Would you like to continue? Yes, No", "Yes");
        switch(request) {
          case "No":
            alert("Goodbye and Thanks!!!");
            break;
          case "Yes":
            num = Math.floor((Math.random() * 9) + 1);
            num1 = Math.floor((Math.random() * 9) + 1);
            document.forms["myform"].elements["num"].value=num;
            document.forms["myform"].elements["num1"].value=num1;
            
            document.forms["myform"].elements["textarea"].value="How much is " + num + " times " + num1;
            document.forms["myform"].elements["answer"].value=" ";
            document.myform.answer.focus();
            break;
          default:
            alert("Goodbye and Thanks!!!");
            document.forms["myform"].elements["textarea"].value="";
            document.forms["myform"].elements["answer"].value=" ";
            
        }
      }
      else
      {
        alert("Try again!!!");
        document.forms["myform"].elements["answer"].value=" ";
        document.myform.answer.focus();   
      }
  }
}
 
  /*

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
    
    celcius = 5/9 * (num_n1-32);
    farenheit = (9/5 * num_n1) + 32;

    document.forms["myform"].elements["result"].value =
      "The value in celcius is : " + celcius.toFixed(2)
      + " The value in farenheit is : " + farenheit.toFixed(2);
  } else {
    document.myform.result.value =
      "Characters are not allowed. \nPlease enter 3 integer numbers!!!";
    //alert("Characters are not allowed. Please input integers only");
    return false;
  }
}*/
