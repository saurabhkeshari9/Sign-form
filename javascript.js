function signUp() { 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    localStorage.setItem("name1", name);
    localStorage.setItem("email1", email);
    localStorage.setItem("pass", pass);
}

function signIn(){
    document.querySelector(".popup").style.display = "flex";
}

document.querySelector(".close").addEventListener("click",function() {
    document.querySelector(".popup").style.display = "none";
})

function signInButton() {
     var email=document.getElementById("email").value;
     var pass=document.getElementById("password").value;

     localStorage.getItem("email1",email);
     localStorage.getItem("pass",pass);

    if (email==email && pass==pass) {
        alert("You are sucessfully Sign In.");
        return document.location.href = "todolist.html";
    }else{
        alert("please check your email and password. ")
    }
    
}