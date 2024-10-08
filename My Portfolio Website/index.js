const typed = new Typed('#element', {
    strings: ['Web Developer', 'App Developer'],
    typeSpeed: 50,
  });

 // Footer loaded
console.log('Contact Me footer loaded.');

// Social media icon loaded
console.log('Social media icons loaded successfully.');


// Dark mode toggle

const toggleButton = document.getElementById('darkModeToggle');
const toggleIcon = document.getElementById('toggleIcon');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    
    // Change icon based on the mode
    if (document.body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
});

const navToggle = document.getElementById('nav-toggle');
const rightNav = document.querySelector('.right');

navToggle.addEventListener('click', () => {
    rightNav.classList.toggle('show');
});



// Menu List

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px"
    }
}


