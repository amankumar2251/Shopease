async function register(){

    const name=document.getElementById("name").value.trim();
    const phoneNumber=document.getElementById("phoneNumber").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    const message=document.getElementById("message");

    if(name===""||phoneNumber===""||email===""||password===""){
        message.innerHTML="Please fill all fields.";
        message.style.color="red";
        return;
    }

    const user={
        name:name,
        phoneNumber:phoneNumber,
        email:email,
        password:password
    };

    try{

        const response=await fetch("http://localhost:8080/api/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        });

        const data=await response.json();

        if(response.ok){

            message.innerHTML="Registration Successful";
            message.style.color="#00ff88";

            setTimeout(function(){
                window.location.href="login.html";
            },2000);

        }else{

            if(data.message){
                message.innerHTML=data.message;
            }else{
                message.innerHTML="Registration Failed";
            }

            message.style.color="red";

        }

    }catch(error){

        message.innerHTML="Server Error";
        message.style.color="red";

    }

}