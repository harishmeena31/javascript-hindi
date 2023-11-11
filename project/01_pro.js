let istatus = document.querySelector("h5")

let add = document.querySelector(".add")

let btn = document.querySelector

// let remove = document.querySelector(".remove")

let check = 0
add.addEventListener("click", function() {
    
    if (check == 0) {
              istatus.innerHTML = "Friends"
              istatus.style.color = "green"
              add.innerHTML = "Remove Friend"
              add.style.backgroundColor = "dadada"
              check = 1
    } else {
             istatus.innerHTML = "Stranger"
             istatus.style.color = "red"
             add.innerHTML = "add Friend"
             add.style.backgroundColor = "cadetblue"
             check = 0
    }
})

// add.addEventListener("click", function(){
//          istatus.innerHTML = "Friends"
//          istatus.style.color = "green"
// })

// remove.addEventListener("click", function(){
//         istatus.innerHTML = "Stranger"
//         istatus.style.color = "red"
// })
