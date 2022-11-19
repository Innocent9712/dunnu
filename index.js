(function(){

  // replace email.js content with API key
    emailjs.init("0G0XVfXAaUiESunhT")
    let doc = document.documentElement;
    let win = window;
  
    let prevScroll = win.scrollY || doc.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;
  
    let header = document.getElementById('doc-header');
  
    let checkScroll = function() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = win.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    let toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > header.offsetHeight) { 
        
        //replace 52 with the height of your header in px
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })(); 

let menu = document.getElementById("menu")
let mobileNav = document.querySelector(".mobile-nav")
let navLinks = document.querySelectorAll(".nav-link")
let form_fields = document.getElementById("my_form")
let submit = document.getElementById('submit')
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let address = document.getElementById("address")
let message = document.getElementById("message")


menu.addEventListener("click", () => {
  if (mobileNav.classList.contains("hide-mobile")) {
    mobileNav.classList.remove("hide-mobile")
    mobileNav.classList.add("show-mobile")
  } else {
    mobileNav.classList.remove("show-mobile")
    mobileNav.classList.add("hide-mobile")
  }
})

navLinks.forEach(nav => {
  nav.addEventListener("click", () => {
    mobileNav.classList.remove("show-mobile")
    mobileNav.classList.add("hide-mobile")
  })
})


form_fields.addEventListener('submit', (e) => {
    e.preventDefault()

    const request = {
    from_name: `${firstName.value} ${lastName.value}`,
    from_address: address.value,
    from_email: email.value,
    to_name: "Replace with company name",
    message: message.value,
    to_email: "replace with company email"
  }

  emailjs.send("Replace with service key","Replace with template key", request).then(()=> {
    alert("Message sent!").catch((error)=> {
      alert("Message not sent!")
    })
  })
})



