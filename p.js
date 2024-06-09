
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

const link = document.getElementById('link')
const git = document.getElementById('git')
const resume = document.getElementById('resume')
const bSite = document.getElementById('b-site')
const tSite = document.getElementById('t-site')
const wSite = document.getElementById('w-site')

link.addEventListener('click',(event)=> {
    event.preventDefault();
    var urlToOpen = "https://www.linkedin.com/in/hariharachandru-front-end-developer/"
    window.open(urlToOpen,'_blank')
  });

git.addEventListener("click",(event)=>{
    event.preventDefault();
    var urlToOpen = "https://github.com/Harii10"
    window.open(urlToOpen,'_blank')
})  


bSite.addEventListener("click",(event)=>{
    event.preventDefault();
    var urlToOpen = "https://harii10.github.io/landing-page/"
    window.open(urlToOpen,'_blank')
})

tSite.addEventListener("click",(event)=>{
    event.preventDefault()
    var urlToOpen = "https://hberlin07.github.io/Text-Speaker/"
    window.open(urlToOpen,'_blank')
})

wSite.addEventListener("click",(event)=>{
  event.preventDefault();
  var urlToOpen = "https://main--denay.netlify.app/"
  window.open(urlToOpen,'_blank')
})

// function validateName() {
//     var nameInput = document.getElementById("i-name");
//     var nameError = document.getElementById("name_error");

//     nameError.textContent = "";

//     if (nameInput.value.trim() === "") {
//       nameError.textContent = "Name is required.";
//     }
//   }

//   function validateEmail() {
//     var emailInput = document.getElementById("i-email");
//     var emailError = document.getElementById("email_error");
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     emailError.textContent = "";

//     if (!emailPattern.test(emailInput.value)) {
//       emailError.textContent = "Enter a valid email address.";
//     }
//   }

//   function validatePhoneNumber() {
//     var phoneNumberInput = document.getElementById("i-number");
//     var phoneNumberError = document.getElementById("number_error");
//     var phoneNumberPattern = /^\d{10}$/;

//     phoneNumberError.textContent = "";

//     if (!phoneNumberPattern.test(phoneNumberInput.value)) {
//       phoneNumberError.textContent = "Enter a valid 10-digit phone number.";
//     }
//   }

//   function validateMessage() {
//     var messageInput = document.getElementById("i-text");
//     var messageError = document.getElementById("text_error");

//     messageError.textContent = "";

//     if (messageInput.value.trim() === "") {
//       messageError.textContent = "Message cannot be empty.";
//     }
//   }

//   function validateForm() {
//     validateName();
//     validateEmail();
//     validatePhoneNumber();
//     validateMessage();

//     var errors = document.querySelectorAll(".error");
//     if (!Array.from(errors).some(error => error.textContent !== "")) {
//       alert("Form is valid! Submitting...");
      
//     }
//   }

//   var form = document.getElementById("myForm");
//   var submitButton = document.querySelectorAll('btn');

//   form.addEventListener("input", function(event) {
//     if (event.target.tagName === "INPUT") {
//       validateForm();
      
//     }
//   })

const form = document.getElementById("myForm")
const name = document.getElementById("i-name")
const email = document.getElementById("i-email")
const phone = document.getElementById("i-number")
const subject = document.getElementById("i-subject")
const message = document.getElementById("i-text")


function sendEmail(){
  const bodyMessage = `Full Name: ${name.values} <br> Email: ${email.values} <br> Mobile Number: ${phone.values} <br> Message: ${message.values} <br>`
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hariharachandru30@gmail.com",
    Password : "46065661F79EBBFFAD515DABE533443B625D",
    To : 'hariharachandru30@gmail.com',
    From : "hariharachandru30@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK"){
      Swal.fire({
        title: "Message Sent!",
        text: "Successfully!",
        icon: "success"
      });
      
    }
  }
);
}
form.addEventListener("submit", (e) => {
  e.preventDefault()
  sendEmail()
})

// theme //
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


ScrollReveal({
    // reset: true,
    distance: '70px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
