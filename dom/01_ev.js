let a = document.querySelector(".bulb")
var btn = document.querySelector("button")
var body = document.querySelector("body")
var sun = document.querySelector(".ri-sun-fill")

let flag = 0

btn.addEventListener("click", function(){
     if(flag == 0){
     a.style.backgroundColor = "yellow"
     btn.innerText = "OFF"
     flag = 1
     }
     else{
         a.style.backgroundColor = "transparent"
         btn.innerText = "ON"
         flag = 0
     } 
 })
sun.addEventListener("click", function(){
    if(flag == 0){
    body.style.backgroundColor = "#0f0f0f"
    sun.style.color = "#fff"
    flag = 1
    }
    else{
        body.style.backgroundColor = "transparent"
        flag = 0
    } 
})


