function printtable() {  
    var output = "<table border='1'><thead><th>Year</th><th>Amount of Deposit</th><th>Interest Rate</th></thead><tbody>";
    for(var n = 1; n <= 10; n++) 
    {                  
        var a= 1000 * Math.pow((1+ 0.05),n);                                
        output += "<tr><td>" + n + "</td><td> " + a.toFixed(2) + "</td><td>" + "5%" + "</td></tr>";
                        //Row Printing
        }
        output += "</tbody></table>";
        document.getElementById("demo").innerHTML = output; 


        var output1 = "<table border='1'><thead><th>Year</th><th>Amount of Deposit</th><th>Interest Rate</th></thead><tbody>";
    for(var n = 1; n <= 10; n++) 
    {                  
        var a= 1000 * Math.pow((1+ 0.06),n);                                
        output1 += "<tr><td>" + n + "</td><td> " + a.toFixed(2) + "</td><td>" + "6%" + "</td></tr>";
                        //Row Printing
        }
        output1 += "</tbody></table>";
        document.getElementById("demo1").innerHTML = output1; 

        var output2 = "<table border='1'><thead><th>Year</th><th>Amount of Deposit</th><th>Interest Rate</th></thead><tbody>";
    for(var n = 1; n <= 10; n++) 
    {                  
        var a= 1000 * Math.pow((1+ 0.07),n);                                
        output2 += "<tr><td>" + n + "</td><td> " + a.toFixed(2) + "</td><td>" + "7%" + "</td></tr>";
                        //Row Printing
        }
        output2 += "</tbody></table>";
        document.getElementById("demo2").innerHTML = output2; 

        }          