let welcomeEl = document.getElementById("welcome-el")
let name = "Ashen"
let greeting = "Welcome, "

welcomeEl.innerText = greeting + name

let count = 0

function increment(){
    count++
    document.getElementById("count-el").innerText = count
}



function save(){
    let saveEl = document.getElementById("save-el")
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    document.getElementById("count-el").innerText = count

}




