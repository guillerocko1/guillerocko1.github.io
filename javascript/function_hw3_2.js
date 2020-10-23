function process() {
  var item1,
    item2,
    item3,
    item4,
    base_salary = 250,
    commission = 0.09,
    total_earned,
    total_com_item1, //Total commission item1
    total_com_item2, //Total commission item2
    total_com_item3, //Total commission item3
    total_com_item4, //Total commission item4
    price1 = 239.99,
    price2 = 129.75,
    price3 = 99.95,
    price4 = 350.89,
    item_n1,
    item_n2,
    item_n3,
    item_n4;
  
  item1 = document.forms["myform"].elements["item1"].value;
  item2 = document.forms["myform"].elements["item2"].value;
  item3 = document.forms["myform"].elements["item3"].value;
  item4 = document.forms["myform"].elements["item4"].value;

  

  if (
    item1 == "" ||
    item2 == "" ||
    item3 == "" ||
    item4 == "" 
    
  ) {
    document.myform.result.value =
      "Empty values are not allowed. \nPlease enter 4 integer numbers!!!";
    //alert("Empty values are not allowed. Please enter 3 integer numbers!!!");
    return false;
  }

  var letters = /^[(-9)-9]+$/;
  if (
    item1.match(letters) &&
    item2.match(letters) &&
    item3.match(letters) &&
    item4.match(letters)
    
  ) {
    item_n1 = parseInt(item1);//sold_item: how many items have sold the salesperson
    item_n2 = parseInt(item2);
    item_n3 = parseInt(item3);
    item_n4 = parseInt(item4);
    
    total_com_item1 = (item1 * price1);
    total_com_item2 = (item2 * price2);
    total_com_item3 =  (item3 * price3);
    total_com_item4 = (item4 * price4);

    total_amount_sold = total_com_item1 + total_com_item2 + total_com_item3 + total_com_item4;
    total_earned = base_salary + (total_amount_sold * commission); 
    
    


    document.forms["myform"].elements["sold1"].value =item_n1;
    document.forms["myform"].elements["sold2"].value =item_n2;
    document.forms["myform"].elements["sold3"].value =item_n3;
    document.forms["myform"].elements["sold4"].value =item_n4;

    document.forms["myform"].elements["total1"].value =total_com_item1.toFixed(2);
    document.forms["myform"].elements["total2"].value =total_com_item2.toFixed(2);
    document.forms["myform"].elements["total3"].value =total_com_item3.toFixed(2);
    document.forms["myform"].elements["total4"].value =total_com_item4.toFixed(2);

    document.forms["myform"].elements["total_sold"].value =total_amount_sold.toFixed(2);;
    document.forms["myform"].elements["total_earned"].value =total_earned.toFixed(2);;

    
  } else {
    document.myform.result.value =
      "Characters are not allowed. \nPlease enter 3 integer numbers!!!";
    //alert("Characters are not allowed. Please input integers only");
    return false;
  }
}
