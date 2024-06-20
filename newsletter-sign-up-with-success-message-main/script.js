const email = document.getElementById("textbox");
const btn = document.getElementById("btn");
const smt = document.getElementById("smt");
const container = document.getElementById("container");
const modal = document.getElementById("modal");
const error = document.getElementById("error");
var array;

btn.addEventListener("click",()=>{
    array = [...email.value]
    if(array.includes("@") && array.includes(".") )
    {   
        container.classList.add("close");
        modal.classList.add("open");
        error.style.opacity = 0;
    }
    else if(array.length == 0)
    {   
        error.style.opacity = 1;
        error.innerHTML = "Email Needed!"
        email.style.borderColor = "red";
    }
    else
    {
        error.style.opacity = 1;
        error.innerHTML = "Email Invalid!"
        email.style.borderColor = "red";
    }
});
smt.addEventListener("click",()=>{
    container.classList.remove("close");
    modal.classList.remove("open");
})  