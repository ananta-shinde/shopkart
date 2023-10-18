
products = JSON.parse(localStorage.getItem("products"))
var table = document.getElementById("table-view");
  
 products.map(p =>
    {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = p.name
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = p.category
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = p.price
        tr.appendChild(td);
        var td = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML ="edit";
        editBtn.className = "btn btn-sm btn-warning"
        td.appendChild(editBtn)
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML ="Delete";
        deleteBtn.setAttribute("class", "btn btn-sm btn-danger")
        td.appendChild(deleteBtn)
        tr.appendChild(td);
        table.appendChild(tr)
    })
 



