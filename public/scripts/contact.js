const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("contact-name");
let email = document.getElementById("contact-email");
let message = document.getElementById("contact-message");

console.log(name);
console.log(email);
console.log(message);

contactForm.addEventListener("submit", (e)=>{
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function() {
    console.log(xhr.responseText);

    if (xhr.responseText == "success") {
      alert("Email sent!");
      name.value = "";
      email.value = "";
      message.value = "";
    }
    else {
      alert("Something went wrong.");
    }
  }

  xhr.send(JSON.stringify(formData));
});
