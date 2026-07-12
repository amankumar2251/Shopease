async function login(){

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const message=document.getElementById("message");

    if(email==="" || password===""){

        message.innerHTML="Please enter Email and Password.";
        message.style.color="red";
        return;

    }

    const user={

        email:email,
        password:password

    };

    try{

        const response=await fetch("http://localhost:8080/api/users/login",{

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify(user)

        });

        const data=await response.json();

        if(response.ok){

            localStorage.setItem("token",data.token);

            message.innerHTML=data.message;
            message.style.color="green";

            setTimeout(function(){

                window.location.href="dashboard.html";

            },1000);

        }else{

            message.innerHTML=data.message || "Invalid Email or Password";
            message.style.color="red";

        }

    }catch(error){

        message.innerHTML="Server Error";
        message.style.color="red";

    }

}