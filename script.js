document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault()

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let message = document.getElementById("message").value

let formMessage = document.getElementById("formMessage")

if(name === "" || email === "" || message === ""){

formMessage.innerText = "Please fill in all fields"

}else{

formMessage.innerText = "Message sent successfully!"

}

})