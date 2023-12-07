
// form is hidden by default
var addNewForm = document.getElementById("add-new-product-form");
addNewForm.setAttribute("hidden",true)
var updateProduct = document.getElementById("update-product-form");
updateProduct.setAttribute("hidden",true)

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
   
   var newProduct = {id:Math.floor(Math.random() * 100), name:pname,price:pprice,category:pcat}
   products.push(newProduct);
   localStorage.setItem("products",JSON.stringify(products))
}

//create product row
const createProductRow = (p) => {
  var tr = document.createElement("tr");
  tr.setAttribute("pid",p.id);
  //get keys array
  keys = Object.keys(p);

  // creating column for each key
  for(i=0;i<3;i++)
  {
       var td = document.createElement("td");
       td.innerHTML = p[keys[i+1]];
       tr.appendChild(td)
  }
  var td = document.createElement("td");
  var btn = document.createElement("button");
  btn.innerHTML = "delete"
  btn.classList ="btn btn-danger";
  btn.setAttribute("id",p.id);
  btn.addEventListener("click",deleteClicked);
  td.appendChild(btn)
  tr.appendChild(td)
  var btn = document.createElement("button");
  btn.innerHTML = "update"
  btn.classList ="btn btn-info";
  btn.setAttribute("id",p.id);
  btn.addEventListener("click",updateproduct);
  td.appendChild(btn)
  tr.appendChild(td)
  productTable.appendChild(tr);
  }

  const deleteClicked = (e) =>{
    var pid = e.target.id;
    products = JSON.parse( localStorage.getItem("products"))
    products = products.filter(p=>p.id != pid );
    localStorage.setItem("products",JSON.stringify(products))
    location.reload()
  }

  var pid = 95 ;
  function updateproduct(e)
  {
    pid = e.target.id;
    updateProduct.removeAttribute("hidden");
    btn = document.getElementById("update");
    btn.setAttribute("pid",e.target.id);
    // add product details to form
    products = JSON.parse( localStorage.getItem("products"))
    result = products.filter(p=>p.id == e.target.id);
    
    var updateName = document.getElementById("update-name");
    var updatePrice = document.getElementById("update-price");
    var updateCategory = document.getElementById("update-category");
    updateName.value = result[0].name
    updatePrice.value = result[0].price
    updateCategory.value = result[0].category


  }

  const updateP = (pid) =>{
     
    var updateName = document.getElementById("update-name");
    var updatePrice = document.getElementById("update-price");
    var updateCategory = document.getElementById("update-category");
    products = JSON.parse( localStorage.getItem("products"))
    for(i=0;i<products.length;i++)
    {
      if(products[i].id == pid){
        products[i].name = updateName.value;
        products[i].price = updatePrice.value;
        products[i].category = updateCategory.value;
      }
    }
    localStorage.setItem("products",JSON.stringify(products))
    updateProduct.setAttribute("hidden",true)
    location.reload()
  }
   
// adding data row to table
 

products = JSON.parse(localStorage.getItem("products"));

products.map(p=>createProductRow(p));
 

