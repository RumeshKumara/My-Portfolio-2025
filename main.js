//include 
lucide.createIcons();

//Custom svg icon implementation
const dataCustomIcon = document.querySelectorAll('[data-custom-icon]'); // Fix: Added square brackets
dataCustomIcon.forEach((icon) => {
    if (icon.getAttribute('data-custom-icon')) {
        const request = new XMLHttpRequest();
        request.open("GET", "./assets/icons/" + icon.getAttribute('data-custom-icon') + ".svg");
        request.setRequestHeader("Content-Type", "image/svg+xml");
        request.addEventListener("load", (event) => {
            if (event.target.status === 200) {
                const response = event.target.responseText;
                icon.innerHTML = response;
            } else {
                console.error('Failed to load SVG icon:', icon.getAttribute('data-custom-icon'));
            }
        });
        request.send();
    }
});