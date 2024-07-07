document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to my CV";
    let index = 0;
    const speed = 130; // typing speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(startSlideUp, 6000); // Wait 3 seconds before starting slide-up
        }
    }

    function startSlideUp() {
        document.querySelector('.welcome-container').style.animationPlayState = 'running';
        setTimeout(showCVHomepage, 3000); // Wait for the slide-up animation to complete
    }

    function showCVHomepage() {
        document.querySelector('.cv-homepage').classList.add('show-cv-homepage');
    }

    typeWriter();
});
