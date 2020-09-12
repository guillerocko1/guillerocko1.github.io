function process() {
  var number1,
    number2,
    number3,
    n1,
    n2,
    n3,
    sum,
    prod,
    average,
    smallest,
    largest;

  number1 = document.forms["myform"].elements["num1"].value;
  number2 = document.forms["myform"].elements["num2"].value;
  number3 = document.forms["myform"].elements["num3"].value;

  if (number1 == "" || number2 == "" || number3 == "") {
    document.myform.result.value =
      "Empty values are not allowed. \nPlease enter 3 integer numbers!!!";
    //alert("Empty values are not allowed. Please enter 3 integer numbers!!!");
    return false;
  }

  var letters = /^[(-9)-9]+$/;
  if (
    number1.match(letters) &&
    number2.match(letters) &&
    number3.match(letters)
  ) {
    n1 = parseInt(number1);
    n2 = parseInt(number2);
    n3 = parseInt(number3);
    sum = n1 + n2 + n3;
    prod = n1 * n2 * n3;
    average = ((n1 + n2 + n3) / 3).toFixed(2);
    smallest = Math.min(n1, n2, n3);
    largest = Math.max(n1, n2, n3);

    document.forms["myform"].elements["result"].value =
      "The inputted numbers were: " +
      n1 +
      ", " +
      n2 +
      ", " +
      n3 +
      "\nThe sum of the integers was: " +
      sum +
      "\nThe product of the integers was: " +
      prod +
      "\nThe average was: " +
      average +
      "\nThe smallest of the integers was: " +
      smallest +
      "\nThe largest of the integers was: " +
      largest;
  } else {
    document.myform.result.value =
      "Characters are not allowed. \nPlease enter 3 integer numbers!!!";
    //alert("Characters are not allowed. Please input integers only");
    return false;
  }
}
