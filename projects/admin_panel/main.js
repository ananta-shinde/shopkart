
const saveBtn = document.getElementById("save");

function clicked(){
   var pname =  document.getElementById("name").value;
   var pprice =  document.getElementById("price").value;
   var pcat =  document.getElementById("category").value;
   if(localStorage.getItem("products"))
   {
        products = JSON.parse( localStorage.getItem("products"))
   }
   else{
     products = Array(); 
   }
   
   var newProduct = {name:pname,price:pprice,category:pcat}
   products.push(newProduct);
   localStorage.setItem("products",JSON.stringify(products))
}