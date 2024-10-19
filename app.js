let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
          });
        }
      });
    };
    
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
    
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.scroll-animate');
        const socialIcons = document.querySelectorAll('.social-icons a');
        const form = document.getElementById('contact-form');
    
        function checkVisibility() {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        }
    
 
        document.addEventListener('DOMContentLoaded', function() {
          const starsContainer = document.querySelector('.stars-container');
          const numStars = 50; // Number of stars
      
          for (let i = 0; i < numStars; i++) {
              const star = document.createElement('div');
              star.classList.add('star');
      
              // Define specific areas for stars to appear
              const area = Math.floor(Math.random() * 3); // 3 areas: top-left, top-right, bottom-center
              let top, left;
      
              switch (area) {
                  case 0: // Top-left
                      top = Math.random() * 30 + '%';
                      left = Math.random() * 30 + '%';
                      break;
                  case 1: // Top-right
                      top = Math.random() * 30 + '%';
                      left = 70 + Math.random() * 30 + '%';
                      break;
                  case 2: // Bottom-center
                      top = 70 + Math.random() * 30 + '%';
                      left = 35 + Math.random() * 30 + '%';
                      break;
              }
      
              star.style.top = top;
              star.style.left = left;
              star.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random duration between 5s and 15s
              starsContainer.appendChild(star);
          }
      });

    function validateForm(formData) {
        const { from_name, from_email, message } = formData;
        if (!from_name || !from_email || !message) {
            alert('All fields are required.');
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(from_email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    setInterval(changeIconColors, 2000);
});

(function() {
  emailjs.init('thnw_a1E9dMlEjnin'); // Replace with your actual public key
})();


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Send the email using EmailJS
  emailjs.send('service_px4qhxv', 'template_jr73i65', {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    phone_number: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  }, 'thnw_a1E9dMlEjnin') // Your public key here
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     alert('Message Sent!');
  }, function(error) {
     console.log('FAILED...', error);
     alert('Message Failed to Send.');
  });
});
 