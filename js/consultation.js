const consultationBtns = document.querySelectorAll(".consultation");

if (consultationBtns.length > 0) {
    consultationBtns.forEach(consBtn => {
        consBtn.addEventListener("click", event => {
            console.log("consultation");
        });
    });
}