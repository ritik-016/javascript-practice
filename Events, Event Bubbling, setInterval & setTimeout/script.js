let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yah you are clicked</b> let's enjoy!"
// })

button.addEventListener("dblclick", ()=>{
document.querySelector(".box").innerHTML = "<b>Yah you are clicked</b> let's enjoy!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right click")
})


document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})
