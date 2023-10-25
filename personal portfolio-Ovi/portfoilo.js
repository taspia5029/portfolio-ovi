
// toggle
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// navbar scroll
 let sections=document.querySelectorAll('section');
 let navLinks =document.querySelectorAll('header nav a');

 window.onscroll=()=>{
    sections.forEach(sec =>{
      let top=window.scrollY;
       let offset=sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links =>{
               links.classList.remove('active');
               document.querySelector(`header nav a [href*=`+ id +`]`).classList.add('active');
           });
        };
    });


    // sticky nav 
 let header =document.querySelector('header');
 header.classList.toggle('sticky',window.scrollY>100);
//  remove toggle icon & navbar
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({ 
    
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content, .heading',{ origin:'top' });
 ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{ origin:'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left' });
 ScrollReveal().reveal('.home-content p, .about-content',{ origin:'right' });

// typed js
const typed =new Typed('.multiple-text',{
    strings:['Flutter Developer','Android Developer','Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
// read more
const readMoreBtn=document.querySelector('#read-btn');
const text=document.querySelector('.read-container');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText ==='Read More'){
      readMoreBtn.innerText ='Read Less';
    } 
    else{
        readMoreBtn.innerText='Read More';
    }
})


// send messege
function sendEmail(){

    var userName =document.getElementById('name').value;
    var phone =document.getElementById('phone').value;
    var email =document.getElementById('email').value;

    var messageBody="Name" +userName +"<br> Phone" +phone +"<br> Email" +email;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "taspiamomotaz5029@gmail.com",
        Password : "C96DEBCE0FE9EBCF806F1DAE13B6073C8E02",
        To :"taspiamomotaz5029@gmail.com" ,
        From :"taspiamomotaz5029@gmail.com",
        Subject : "Contact me",
        Body : messageBody
    }).then(
      message => alert(message)
    );
};


