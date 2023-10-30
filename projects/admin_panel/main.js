
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
  btn.addEventListener("click",updateClicked);
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

  const updateClicked = (e)=>{
    var modal = document.getElementById("update-product-form");
    var updatebtn = document.getElementById("update");
    // updatebtn.value = e.target.id;
    modal.style.display = "block";
  }

  const update = ()=>{
         console.log(e);
  }



  


// adding data row to table
 

products = JSON.parse(localStorage.getItem("products"));

products.map(p=>createProductRow(p));
 

