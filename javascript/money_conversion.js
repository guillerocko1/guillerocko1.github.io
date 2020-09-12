function process() {
  var number1, result;

  //alert("working");

  number1 = document.forms["myform"].elements["num1"].value;

  if (number1 == "") {
    document.myform.result.value =
      "Empty values are not allowed. \nPlease enter 1 integer number!!!";
    return false;
  }

  var letters = /^[(-9)-9]+$/;
  if (number1.match(letters)) {
    n1 = parseInt(number1);

    var pounds = (n1 * 0.77).toFixed(2);
    var canadian = (n1 * 1.31).toFixed(2);
    var euro = (n1 * 0.89).toFixed(2);
    var yen = (n1 * 108.38).toFixed(2);
    var peso = (n1 * 19.11).toFixed(2);

    document.myform.pounds.value = pounds;
    document.myform.canadian.value = canadian;
    document.myform.euro.value = euro;
    document.myform.yen.value = yen;
    document.myform.peso.value = peso;
  } else {
    document.myform.result.value =
      "Characters are not allowed. \nPlease enter 1 integer numbers!!!";
    return false;
  }
}
