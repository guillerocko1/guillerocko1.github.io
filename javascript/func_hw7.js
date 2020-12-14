function switchStyle(style) 
{

/* if the first radio button was checked then style will = 0, as the first element
in the radio button array */

    var body = document.getElementById("body");
    if(style == 0) {
        body.className = "purple";
    }
    else if(style == 1) {
        body.className = "yellow";
    }
    else if(style == 2) {
        body.className = "orange";
    }
    else if(style == 3) {
        body.className = "red";
    }
}

function switchFontStyle(style) 
{
    var body = document.getElementById("body");
    if(style == 0) {
        body.className = "italic";
    }
    else if(style == 1) {
        body.className = "normal";
    }
}

function switchFontWeight(style) 
{
    var body = document.getElementById("body");
    if(style == 0) {
        body.className = "bold";
    }
    else if(style == 1) {
        body.className = "normal";
    }
}

function selectFontSize()
{      
    var origTableObject = document.getElementById("originalTable");    
    var selectedFontSize = document.getElementById('fontSize').value;
            
    if (selectedFontSize == "small")
    {
        origTableObject.className = "small basicTable";
    }
    else if (selectedFontSize == "medium")
    {
        origTableObject.className = "medium basicTable";
    }
    else if (selectedFontSize == "large")
    {
        origTableObject.className = "large basicTable";
    }           
}

function selectFontFamily()
{
    var origTableObject = document.getElementById("originalTable");    
    var selectedFontFamily = document.getElementById('fontWeight').value;
    if (selectedFontFamily == "impactFont")
    {
        body.className = "impactFont";
        //origTableObject.className = "small basicTable";
    }
    else if (selectedFontFamily == "arialFont")
    {
        body.className = "arialFont";
        //origTableObject.className = "medium basicTable";
    }
    else if (selectedFontFamily == "georgiaFont")
    {
        body.className = "georgiaFont";
        //origTableObject.className = "large basicTable";
    }           
}

