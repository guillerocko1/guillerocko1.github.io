function process() {
  var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5;

  number1 = document.forms["myform"].elements["num1"].value;
  number2 = document.forms["myform"].elements["num2"].value;
  number3 = document.forms["myform"].elements["num3"].value;
  number4 = document.forms["myform"].elements["num4"].value;
  number5 = document.forms["myform"].elements["num5"].value;

  if (
    number1 == "" ||
    number2 == "" ||
    number3 == "" ||
    number4 == "" ||
    number5 == ""
  ) {
    document.myform.result.value =
      "Empty values are not allowed. \nPlease enter 5 integer numbers!!!";
    return false;
  }

  var letters = /^[(-9)-9]+$/;
  if (
    number1.match(letters) &&
    number2.match(letters) &&
    number3.match(letters) &&
    number4.match(letters) &&
    number5.match(letters)
  ) {
    n1 = parseInt(number1);
    n2 = parseInt(number2);
    n3 = parseInt(number3);
    n4 = parseInt(number4);
    n5 = parseInt(number5);

    var positive = 0,
      negative = 0,
      zero = 0;

    if (n1 > 0) positive += 1;
    else if (n1 < 0) negative += 1;
    else zero += 1;

    if (n2 > 0) positive += 1;
    else if (n2 < 0) negative += 1;
    else zero += 1;

    if (n3 > 0) positive += 1;
    else if (n3 < 0) negative += 1;
    else zero += 1;

    if (n4 > 0) positive += 1;
    else if (n4 < 0) negative += 1;
    else zero += 1;

    if (n5 > 0) positive += 1;
    else if (n5 < 0) negative += 1;
    else zero += 1;

    document.forms["myform"].elements["result"].value =
      "The inputted numbers were " +
      n1 +
      ", " +
      n2 +
      ", " +
      n3 +
      ", " +
      n4 +
      ", " +
      n5 +
      "\nThe count of the negative numbers is " +
      negative +
      "\nThe count of the positive numbers is " +
      positive +
      "\nThe count of zeros is " +
      zero;
  } else {
    document.myform.result.value =
      "Characters are not allowed. \nPlease enter 5 integer numbers!!!";
    return false;
  }
}
