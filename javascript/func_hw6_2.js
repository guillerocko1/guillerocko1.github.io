$(document).ready(function(){
    $(".flip").click(function(){
       $(".panel").slideToggle("slow");
     });
   });
   
   function ToSearch()
    {	
        
        var msg1 = "Field is Empty! Please, enter a String to Search!";
        
        // check for any space characters that may be input
         
        var count=0;
            var toSearch = document.forms["usrform"].elements["toSearch"].value.toLowerCase().charAt( 0 );
            var toSearch=toSearch.toLowerCase();
            

            var paragraph = document.getElementById("paragraph").value;
            var paragraph = paragraph.toLowerCase();

        if (toSearch == "" || toSearch == null)//If value is empty
         {          	
            document.getElementById("msg").innerHTML = msg1;
               
         }   
         else //If letter is not empty
         {

           
             for (i=0; i < paragraph.length; i++)
                     {

                    if (paragraph.charAt(i) == toSearch)
                             count++;     
                     }         
      
            if ( count == 0 )
                     {
            
               //document.getElementById("result").value=toSearch + " not found";

                    ////////////////////////

// assemble HTML to pump into new window:

                var myText = "<html>\n";
                myText += "<head>\n";
                myText += "<title>Not Found!</title>\n";
                myText += "</head>\n";
                myText += "<body>\n";
                myText += "<div align='center'>\n";
                myText += "<h4>Search character  " + toSearch + " is not found in text String</h4>\n";
                myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
                myText += "</div>\n";
                myText += "</body>\n";
                myText += "</html>";

                // open window on the upper right of the screen

                var errWindow = window.open("", "new_window", "top=220,left=50,width=300,height=100");

                errWindow.focus();

                // pump html into to this new opened window

                    errWindow.document.write(myText);

                // tell browser that errWindow document is finished loading

                    errWindow.document.close();

                // Put error msg in input text box of original page

                    document.getElementById("result").value = "Search Character is not found in text String";

                ///////////////////////



                     }
            else
            {
                
               document.getElementById("result").value=count + 
                  " occurrence(s) of " + toSearch + " found";


            }
       }

    }       
   
        
        

        