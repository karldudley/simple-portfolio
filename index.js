// select the icon in the navbar
const icon = document.querySelector('nav > i');

// add a click event listener to the icon
icon.addEventListener('click', () => {
    // Toggle the class on the body to change the theme
    document.body.classList.toggle('light-mode');

    // Toggle the CSS variables based on the class added
    if (document.body.classList.contains('light-mode')) {
        // Light mode colors
        document.documentElement.style.setProperty('--primary-color', '#4338ca');
        document.documentElement.style.setProperty('--secondary-color', '#818cf8');
        document.documentElement.style.setProperty('--bg-color', '#eef2ff');
    } else {
        // Default dark mode colors
        document.documentElement.style.setProperty('--primary-color', '#e0e7ff');
        document.documentElement.style.setProperty('--secondary-color', '#818cf8');
        document.documentElement.style.setProperty('--bg-color', '#1e1b4b');
    }
});
