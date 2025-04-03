document.querySelectorAll("a").forEach((btn) => {
    btn.addEventListener("click", function (event) {
        this.blur(); // Remove o foco do botão
    });
});