document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");

    function effectWrite(text, speed, callback) {
        let i = 0;
        clearText(0) // Limpa o conteúdo antes de escrever;

        function type() {
            if (i < text.length) {
                textElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                setTimeout(callback, 50); // Espera antes de chamar a próxima função
            }
        }

        setTimeout(() => type(), 100);

    }

    function startDotsEffect() {
        const baseText = "> loading";
        let dots = 0;
        let cycles = 0;
        const dotsInterval = setInterval(() => {
            textElement.innerHTML = baseText + ".".repeat(dots);
            dots = (dots + 1) % 4;

            if (dots === 0) {
                cycles++;
            }

            if (cycles >= 3) { 
                clearInterval(dotsInterval);
                setTimeout(() => effectWrite("> Complete!", 75, () => clearText(550)), 50);
            }
        }, 200);
    }

    function clearText(waitTime){
        setTimeout(() => {
            textElement.innerHTML = "";
        }, waitTime);
    }

    effectWrite("> loading", 100, startDotsEffect);
    setTimeout(() => {
        effectWrite("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 100);
    }, 150);


    /////////////////////////////USAR SETINTERVAL
    //https://pt.stackoverflow.com/questions/349198/como-fa%C3%A7o-para-executar-uma-fun%C3%A7%C3%A3o-apos-o-t%C3%A9rmino-de-outra
});
