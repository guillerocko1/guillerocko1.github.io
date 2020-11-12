var oilArray = [ ["AL", "ALABAMA", "Montgomery", "4,887,871"],                     
                ["AK", "ALASKA", "Juneau", "737,438"],  
                ["AZ", "ARIZONA", "Phoenix", "7,171,646"],
                ["AR", "ARKANSAS", "Little Rock", "3,010,825"],
                ["CA", "CALIFORNIA", "Sacramento", "39,557,045"],
                ["CO", "COLORADO", "Denver", "5,694,564"] ];    

function ButtonPressed()
  {   
    var searchKey = document.forms["SearchForm"].elements["inputState"].value;  //get searchkey from form input box
    searchKey = searchKey.toUpperCase();     //change search key to upper case
    
    var found = false;
    for (var row = 0; row < oilArray.length; row++) //loop for 4 rows
     {
     if ((oilArray[row][0] == searchKey) || (oilArray[row][1] == searchKey))

                 //check if search key = 1st or 2nd element of each row
     { 

                //if search key = 1st or 2nd element of a particular row
                //then place in input boxes for price and comment, that is, the 3rd and 4th elements

       document.forms["SearchForm"].elements["capital"].value = oilArray[row][2];
       document.forms["SearchForm"].elements["population"].value = oilArray[row][3];  
       row = oilArray.length;   //ends loop if match found
       found = true;
     }
    }

  if ( found == false ) {
   document.forms["SearchForm"].elements["population"].value= "State Info not found!"; 
       }

  }