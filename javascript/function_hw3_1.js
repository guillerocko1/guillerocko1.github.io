function process() {
  var avg, final_exam, participation, midterm, final_avg, n1, n2, n3;

  avg = document.forms["myform"].elements["avg"].value;
  midterm = document.forms["myform"].elements["midterm"].value;
  final_exam = document.forms["myform"].elements["final_exam"].value;
  participation = document.forms["myform"].elements["participation"].value;

  if (avg == "" || midterm == "" || final_exam == "" || participation == "") {
    alert("Empty values are not allowed. \nPlease enter 4 integer numbers!!!");
     
    //alert("Empty values are not allowed. Please enter 3 integer numbers!!!");
    return false;
  }

  var letters = /^[(-9)-9]+$/;
  if (
    avg.match(letters) &&
    midterm.match(letters) &&
    final_exam.match(letters) &&
    participation.match(letters)
  ) {
    n1_avg = parseInt(avg);
    n2_midterm = parseInt(midterm);
    n3_final = parseInt(final_exam);
    n4_participation = parseInt(participation);
    final_avg =
      0.5 * n1_avg + 0.2 * n2_midterm + 0.2 * n3_final + 0.1 * n4_participation;

    if (final_avg >= 9 && final_avg <= 10) {
      document.forms["myform"].elements["result"].value =
        "The Final Average is: " + Math.round(final_avg) + " equivalent A";
    } else if (final_avg >= 8 && final_avg < 9) {
      document.forms["myform"].elements["result"].value =
        "The Final Average is: " + Math.round(final_avg) + " equivalent B";
    } else if (final_avg >= 7 && final_avg < 8) {
      document.forms["myform"].elements["result"].value =
        "The Final Average is: " + Math.round(final_avg) + " equivalent C";
    } else if (final_avg >= 6 && final_avg < 7) {
      document.forms["myform"].elements["result"].value =
        "The Final Average is: " +
        Math.round(final_avg) +
        " equivalent D - Student must retake the course!";
    } else if (final_avg >= 0 && final_avg < 6) {
      document.forms["myform"].elements["result"].value =
        "The Final Average is: " +
        Math.round(final_avg) +
        " equivalent F - Student must retake the course!";
    }
  } else {
    
    alert("Characters are not allowed. \nPlease enter just integer numbers!!!");
    //alert("Characters are not allowed. Please input integers only");
    return false;
  }
}
