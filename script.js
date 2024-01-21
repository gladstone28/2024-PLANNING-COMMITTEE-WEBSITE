// Accordion functionality
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Search functionality - implement as needed

function searchEvents() {
    let input = document.getElementById('search-input').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('accordion');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            x[i].nextElementSibling.style.display="none"; // Hides the panel as well
        } else {
            x[i].style.display="list-item"; 
            x[i].nextElementSibling.style.display="none"; // Keeps the panel hidden until clicked
        }
    }
}
