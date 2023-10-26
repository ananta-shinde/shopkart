
// form is hidden by default
var addNewForm = document.getElementById("add-new-product-form");
addNewForm.setAttribute("hidden",true)

var productTable = document.getElementById("product-table");

const addNewClicked = ()=>{
  console.log("add clicked")
     addNewForm.removeAttribute("hidden");
     productTable.setAttribute("hidden",true)
}
const viewProductClicked = ()=>{
  console.log("add clicked")
  productTable.removeAttribute("hidden");
  addNewForm.setAttribute("hidden",true)
}


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

//create product row
const createProductRow = (p) => {
  var tr = document.createElement("tr");
  //get keys array
  keys = Object.keys(p);
  for(i=0;i<3;i++)
  {
       var td = document.createElement("td");
       td.innerHTML = p[keys[i]];
       tr.appendChild(td)
  }
  var td = document.createElement("td");
  var btn = document.createElement("button");
  btn.innerHTML = "delete"
  td.appendChild(btn)
  tr.appendChild(td)
  productTable.appendChild(tr);
  }
  


// adding data row to table
 

products = JSON.parse(localStorage.getItem("products"));

products.map(p=>createProductRow(p));
 

