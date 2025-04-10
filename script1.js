console.log("JavaScript Loaded!");
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    const contactForm = document.getElementById("contact");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const name = document.querySelector("input[name='name']").value.trim();
            const email = document.querySelector("input[name='email']").value.trim();
            const message = document.querySelector("textarea[name='message']").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
                return;
            }

            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        });
    }
});
