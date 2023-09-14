let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logOutBtn = document.querySelector('#logOut')


let username =localStorage.getItem("username");
if(username){   
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = username; 
}
logOutBtn.addEventListener('click',function(e){
    e.preventDefault();
    localStorage.clear();
    setTimeout(()=>{
        window.location="register.html"
    },1500)
})