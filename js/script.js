document.addEventListener("DOMContentLoaded", () => {
    
    const textElement = document.querySelector(".container h3");
    if (textElement) {
        const fullText = textElement.textContent;
        textElement.textContent = ""; 
        
        let index = 0;
        function typeWriter() {
            if (index < fullText.length) {
                textElement.textContent += fullText.charAt(index);
                index++;
                setTimeout(typeWriter, 45);
            }
        }
        setTimeout(typeWriter, 800);
    }

    // --- EFEITO PISCAR--
    const title = document.querySelector(".container h1");
    if (title) {
        function flickerEffect() {
            title.style.opacity = Math.random() > 0.08 ? "1" : "0.4";
            
            let randomTime = Math.random() * 500 + 50; 
            setTimeout(flickerEffect, randomTime);
        }
        flickerEffect();
    }
});