function valid_phone() {

    var errMsg = "Invalid phone #";
    var phoneNumber = document.forms["usrform"].elements["phone"].value;

    //document.getElementById.result.value = phoneNumber;
    //document.getElementById("result").value = phoneNumber;

      phoneRegExp = /^(\()(\d{3})(\))(\s)(\d{3})(-\d{4})$/;
    
      var mySplitResult = phoneNumber.split(")");
      var first = mySplitResult[0];
      var myfirstSplit = first.split("(");

      var number = mySplitResult[1];
      var secondSplit = number.split("-"); 

      
    /*
      document.getElementById("result").value = " First value : " + mySplitResult[0] + 
                                                " Second Value : " + mySplitResult[1] +
                                                " Area Code Value : " + myfirstSplit[1] + 
                                                " Number : " + number + 
                                                " Third Value : " + secondSplit[0] + 
                                                " Fourth Value : " + secondSplit[1];
    */
    //document.write("The first element is " + mySplitResult[0]);
    //document.write("<br> The second element is " + mySplitResult[1]);

    if ( !phoneRegExp.test(phoneNumber))

    alert("inputted phone# has wrong format \nPlease use exactly (999) 999-9999\nwhere each 9 represents a number")

    else  {  

        alert("valid phone #")
          document.forms["usrform"].elements["area"].value = myfirstSplit[1];
          document.forms["usrform"].elements["first"].value = secondSplit[0];
          document.forms["usrform"].elements["last"].value = secondSplit[1];

         }

 }