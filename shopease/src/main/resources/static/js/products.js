const token=localStorage.getItem("token");
let editingId=null;
let allProducts=[];

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

    allProducts=await response.json();

    displayProducts(allProducts);

}

function displayProducts(products){

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

    if(products.length===0){

        html=`
        <h2 style="width:100%;text-align:center;color:#888;">
            No Products Found
        </h2>
        `;

    }

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

        productName:productName,
        description:description,
        price:Number(price),
        quantity:Number(quantity)

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

const search=document.getElementById("search");

search.addEventListener("keyup",function(){

    const keyword=search.value.toLowerCase();

    const filteredProducts=allProducts.filter(product=>

        product.productName.toLowerCase().includes(keyword) ||

        product.description.toLowerCase().includes(keyword)

    );

    function displayProducts(products){

        let html="";

        products.forEach(product=>{

            html+=`
        <div class="product-card">

            <div class="product-image">

                <i class="bi bi-box-seam-fill"></i>

            </div>

            <div class="product-details">

                <h2 class="product-name">${product.productName}</h2>

                <p class="product-description">${product.description}</p>

                <div class="price-stock">

                    <span class="product-price">
                        ₹${product.price}
                    </span>

                    <span class="stock-badge">
                        Stock : ${product.quantity}
                    </span>

                </div>

                <div class="button-group">

                    <button class="edit-button" onclick='editProduct(${JSON.stringify(product)})'>
                        <i class="bi bi-pencil-square"></i>
                        Edit
                    </button>

                    <button class="delete-button" onclick="deleteProduct(${product.id})">
                        <i class="bi bi-trash-fill"></i>
                        Delete
                    </button>

                </div>

            </div>

        </div>
        `;

        });

        if(products.length===0){

            html=`
        <div class="empty-card">
            <i class="bi bi-search"></i>
            <h2>No Products Found</h2>
            <p>Try another keyword.</p>
        </div>
        `;

        }

        document.getElementById("productContainer").innerHTML=html;

    }

});