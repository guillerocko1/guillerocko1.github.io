$(document).ready(function(){
    $(".flip").click(function(){
       $(".panel").slideToggle("slow");
     });
   });
   
   function Validate()
    {	
        var msg = "Enter a name!";
        var msg2 = "Enter a valid address!";
        var msg3 = "Enter a valid email!";
        var validMsg = "Textbox fields are valid!";
        var x=0;   // use x for determining if form fields valid 
       
        // check for any space characters that may be input
         
        var name = document.getElementById("name").value;
           
         if (name == "" || name == null)
         {          	
               document.getElementById("msg").innerHTML = msg;
               x=1;
         }   
         else
         {
            document.getElementById("msg").innerHTML = "";
         }       
   
        var address = document.getElementById("address").value;

        if (address == "" || address == null )

            {
             document.getElementById("msg2").innerHTML = msg2;
             x=1;
            }
        else
         {
            document.getElementById("msg2").innerHTML = "";
         }   
   
          var emailID = document.getElementById("email").value
   
       
         var emailRE = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   
          if(emailRE.test(emailID) == false) 
          {
                document.getElementById("msg3").innerHTML = msg3;
                x=1;	
          }
          else
         {
            document.getElementById("msg3").innerHTML = "";
         }   
              
     //validate radio button
            var rateChecked = false;
        
            for (var i=0; i<4; ++i) 
            {
            if (document.myform.rating[i].checked) 
            {
                    rateChecked = true;
                    break;
                }
            }
        
            if (rateChecked == false) 
            {
                document.getElementById("msg_radio").innerHTML = "<br>Check a rate!";
                x=1; 
            }
            else    
            {
            document.getElementById("msg_radio").innerHTML = "";        
            }
            
            //Validating selcect items
            
            var selstat = document.forms["myform"].elements["status"].selectedIndex;

            if (selstat < 1)  
            {
            document.getElementById("msg_select").innerHTML = "<br>Select an occupation!";
            x=1;
            }
            
            else
            {            
            document.getElementById("msg_select").innerHTML = ""; 
            }

            //Checkbox validation
            var b = 0, chk=document.getElementsByName("time");
            for(j=0;j<chk.length;j++) {
                if(chk.item(j).checked == false) {
                    b++;
                }
            }
            if(b == chk.length) {
                document.getElementById("msg_checkbox").innerHTML = "<br>Please select the time to Reserve!"; 
                document.getElementById("tm").style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("tm").style.border = "";
                document.getElementById("msg_checkbox").innerHTML = ""; 
            }
            
        
        } //Close Validate function

        function res()
        {
        document.getElementById("msg").innerHTML = " ";
        document.getElementById("msg2").innerHTML = " ";
        document.getElementById("msg3").innerHTML = " ";
        document.getElementById("msgV").innerHTML = " ";
        document.getElementById("msg_radio").innerHTML = " ";
        document.getElementById("msg_select").innerHTML = " ";
        document.getElementById("msg_checkbox").innerHTML = " ";
        document.getElementById("tm").style.border = "2px none";
        }