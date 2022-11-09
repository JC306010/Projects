console.log('Hello World!')
let btn = document.createElement("button")
appendChild

// Function to create a button
function createButton() {
    let btn = document.createElement("button")
    btn.innerHTML = "Click Me"
    btn.onclick = () => {
        alert("Hello World!")
    }
    document.body.appendChild(btn)
}
