
if(sessionStorage.getItem("products")){
    // displaying products

    products = sessionStorage.getItem("products");
    
}

// create or add product
function addProduct()
{
    if(sessionStorage.getItem("products"))
    {
        products = sessionStorage.getItem("products");
    }else{
        products = Array();
    }
    
    var p = readProductFromUI();
    products.push(p);
    sessionStorage.setItem("products",  products);
}

function readProductFromUI()
{
    var addForm = document.forms[0];
    var inputs = addForm.elements;
    
    var newproduct = {
        name:inputs.name.value,
        price : inputs.price.value,
        category :inputs.category.value
    }
    return newproduct;
}

var saveproduct = document.getElementById("saveProduct");
saveproduct.addEventListener("click",addProduct);
// console.log(newproduct)
// console.log(products)
// addProduct(newproduct)
  

 

 
 