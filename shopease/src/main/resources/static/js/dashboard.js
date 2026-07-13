const token=localStorage.getItem("token");
const email=localStorage.getItem("email");
document.getElementById("userEmail").innerHTML=email;

if(token===null){
    window.location.href="login.html";
}

loadProducts();

async function loadProducts(){
    try{
        const response=await fetch("http://localhost:8080/api/products",{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+token,
                "Content-Type":"application/json"
            }
        });

        if(response.status===401){
            logout();
            return;
        }

        const products=await response.json();
        document.getElementById("productCount").innerHTML=products.length;

    }catch(error){
        console.log(error);
    }
}

function logout(){
    localStorage.removeItem("token");
    window.location.href="login.html";
}
showDateTime();

setInterval(showDateTime,1000);

function showDateTime(){

    const now=new Date();

    document.getElementById("currentDate").innerHTML=now.toDateString();

    document.getElementById("currentTime").innerHTML=now.toLocaleTimeString();

}