function forFunction() {
  var i, total_sum=0, total_product=1;
  var j=3, sum_while=0, product_while=1;
  
  for(i=5; i<=21; i+=4)
  {
    total_sum=total_sum + i;
    total_product= total_product * i;
  }
  document.forms["myform"].elements["textarea2"].value= total_product;
  document.forms["myform"].elements["textarea1"].value= total_sum; 
  
  while (j<=21)
  {
    sum_while=sum_while+j;
    product_while=product_while*j;
    j+=3;
  }

  document.forms["myform"].elements["prod_while_text"].value= product_while;
  document.forms["myform"].elements["sum_while_text"].value= sum_while; 

}  