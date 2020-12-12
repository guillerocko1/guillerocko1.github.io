$(document).ready(function(){
    $(".flip").click(function(){
       $(".panel").slideToggle("slow");
     });
   });
   
   function Validate()
    {	
        var msg = "Please! Enter an integer with at least 4 decimals!!";
        var msg1 = "Please! Enter a Number!";
        
        // check for any space characters that may be input
         
        var n = document.getElementById("number").value;
        var number = parseFloat(n);//Using the parseFloat() function
        var regexp = /^\d+(\.\d{4,10})?$/;//Using regular expressions to validate the number typed
        var valid = regexp.test(number);//Compating the value typed with the input mask
           
         if (number == "" || number == null)//If value is empty
         {          	
               document.getElementById("msg").innerHTML = msg1;
               
         }   
         else if (valid == false)//If value has less than 4 digits
         {
            document.getElementById("msg").innerHTML = msg;
               x=1;
         }
         else //If value has more than 4 digits
         {
            document.getElementById("msg").innerHTML = ""; 
            var round = Math.round(number);//a
            var floor = Math.floor(number);//a
            var sqr_round = Math.round(Math.sqrt(number));//b
            var thents = number.toFixed(1);//c
            var hundredths = number.toFixed(2);//d
            var thousandths = number.toFixed(3);//e

            var result = "The Original value typed is : " + n + "\n" +
                         "rounded to the nearest integer using math round : " + round + "\n" +
                         "rounded to the nearest integer using math floor :" + floor + "\n" +
                         "square root of the number and round it to an integer : " + sqr_round + "\n" +
                         "rounded to the nearest tenth using toFixed : " + thents + "\n" +
                         "rounded to the nearest hundredth using toFixed : " + hundredths  + "\n" +
                         "rounded to the nearest thousandth using toFixed : " + thousandths;
                        

            document.getElementById("result").innerHTML = result;

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