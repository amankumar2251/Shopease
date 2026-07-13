const token=localStorage.getItem("token");
let editingId=null;

if(token===null){
    window.location.href="login.html";
}

loadProducts();

async function loadProducts(){

    const response=await fetch("http://localhost:8080/api/products",{
        method:"GET",
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        }
    });

    const products=await response.json();

    let html="";

    products.forEach(product=>{

        html+=`
        <div class="product-card">
            <h2 class="product-name">${product.productName}</h2>
            <p class="product-description">${product.description}</p>
            <p class="product-price">₹${product.price}</p>
            <p class="product-quantity">Stock : ${product.quantity}</p>

            <div class="button-group">
                <button class="edit-button" onclick='editProduct(${JSON.stringify(product)})'>Edit</button>
                <button class="delete-button" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        </div>
        `;

    });

    document.getElementById("productContainer").innerHTML=html;

}

function openModal(){
    document.getElementById("productModal").style.display="flex";
}

function closeModal(){

    document.getElementById("productModal").style.display="none";

    editingId=null;

    document.getElementById("productName").value="";
    document.getElementById("description").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";

}

function editProduct(product){

    editingId=product.id;

    document.getElementById("productName").value=product.productName;
    document.getElementById("description").value=product.description;
    document.getElementById("price").value=product.price;
    document.getElementById("quantity").value=product.quantity;

    openModal();

}

async function saveProduct(){

    const product={

        productName:document.getElementById("productName").value,
        description:document.getElementById("description").value,
        price:Number(document.getElementById("price").value),
        quantity:Number(document.getElementById("quantity").value)

    };

    let url="http://localhost:8080/api/products";
    let method="POST";

    if(editingId!==null){
        url="http://localhost:8080/api/products/"+editingId;
        method="PUT";
    }

    const response=await fetch(url,{
        method:method,
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(product)
    });

    if(response.ok){

        closeModal();

        loadProducts();

    }else{

        alert("Unable to save product.");

    }

}

async function deleteProduct(id){

    const confirmDelete=confirm("Are you sure you want to delete this product?");

    if(!confirmDelete){
        return;
    }

    const response=await fetch("http://localhost:8080/api/products/"+id,{
        method:"DELETE",
        headers:{
            "Authorization":"Bearer "+token
        }
    });

    if(response.ok){
        loadProducts();
    }else{
        alert("Unable to delete product.");
    }

}