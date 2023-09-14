// register user



let username = document.querySelector("#name"); 
let email = document.querySelector("#email"); 
let password = document.querySelector("#password"); 
let registerBtn = document.querySelector("#sign_up"); 
registerBtn.addEventListener('click',register);
function register(e){
    e.preventDefault();
    if(username.value === "" || email.value ===""|| password.value ===""){
        alert("Please fill all the fields")
    }else{
        localStorage.setItem('username',username.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);

        setTimeout(()=>{
            window.location= "login.html";
        },1500)
    }
}