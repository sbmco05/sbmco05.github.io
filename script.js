document.addEventListener("DOMContentLoaded", function () {

    const textElement = document.getElementById("text");
    const text = "> loading";
    let i = 0;

    setTimeout(effectWrite, 1000);

    function effectWrite() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(effectWrite, 100); //Write effect
        }
    }

    effectWrite();
});
