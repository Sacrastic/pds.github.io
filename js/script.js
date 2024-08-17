//fade in effect
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the item is visible
    });

    items.forEach(item => {
        observer.observe(item);
    });
});
//fade-in

 // Customizing carousel controls for sliding one item at a time
 document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(button => {
        button.addEventListener('click', function() {
            const carousel = document.querySelector('#gridCarousel');
            const items = carousel.querySelectorAll('.carousel-item');
            const activeItem = carousel.querySelector('.carousel-item.active');

            let newIndex = Array.from(items).indexOf(activeItem);

            if (button.classList.contains('carousel-control-prev')) {
                newIndex = newIndex - 1 >= 0 ? newIndex - 1 : items.length - 1;
            } else {
                newIndex = newIndex + 1 < items.length ? newIndex + 1 : 0;
            }

            activeItem.classList.remove('active');
            items[newIndex].classList.add('active');
        });
    });




    //typewriter re work 


    //dark mode
    $(document).ready(function(){
        // Check if dark mode is enabled
        if(localStorage.getItem('dark-mode') === 'enabled') {
            enableDarkMode();
        }

        // Toggle dark mode on button click
        $('#darkModeToggle').click(function() {
            if(localStorage.getItem('dark-mode') !== 'enabled') {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });

        function enableDarkMode() {
            $('body').addClass('dark-mode');
            $('.navbar').addClass('dark-mode');
            $('.bg-light').addClass('dark-mode');
            $('.text-primary').addClass('dark-mode');
            $('.btn-outline-secondary').addClass('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            $('#darkModeToggle').html('<i class="bi bi-sun"></i> Light Mode');
        }

        function disableDarkMode() {
            $('body').removeClass('dark-mode');
            $('.navbar').removeClass('dark-mode');
            $('.bg-light').removeClass('dark-mode');
            $('.text-primary').removeClass('dark-mode');
            $('.btn-outline-secondary').removeClass('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
            $('#darkModeToggle').html('<i class="bi bi-moon"></i> Dark Mode');
        }
    });

    // Add this to your existing script.js

document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    
    // Toggle dark mode for the navbar
    document.querySelector('.navbar').classList.toggle('navbar-dark-mode');
    
    // Optionally change the icon in the dark mode toggle button
    if (document.body.classList.contains('dark-mode')) {
        this.innerHTML = '<i class="bi bi-sun"></i> Light Mode';
    } else {
        this.innerHTML = '<i class="bi bi-moon"></i> Dark Mode';
    }
});
// Retrieve dark mode state from local storage
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Function to apply dark mode
function applyDarkMode(darkMode) {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('nav').classList.add('navbar-dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('nav').classList.remove('navbar-dark-mode');
    }
}

// Apply the saved dark mode state on page load
applyDarkMode(isDarkMode);

// Toggle dark mode when the button is clicked
document.getElementById('darkModeToggle').addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    applyDarkMode(isDarkMode);
    // Save the current state in local storage
    localStorage.setItem('darkMode', isDarkMode);
});

    // JavaScript for dark mode toggle

