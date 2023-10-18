 
 var para = document.getElementById("para");
 var text = localStorage.getItem("data");
 var pname = document.getElementById("name");
 var price = document.getElementById("price");
 var category = document.getElementById("category");
 
 
 var btnClick = ()=>{
  newProduct  ={
      name:pname.value,
      price:price.value,
      category:category.value
   };
   if(localStorage.getItem("products"))
   {
         
         products = JSON.parse(localStorage.getItem("products"))
   }
   else{
      products = Array();
   }
  
   products.push(newProduct);

   
    localStorage.setItem("products",JSON.stringify(products));
 }
 

 

 