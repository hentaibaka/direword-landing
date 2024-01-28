const menuLinks = document.querySelectorAll(".scroll__link[data-goto]");

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", event => {
            const menuLink = event.target;
            if (menuLink.dataset.goto && 
                document.querySelector(menuLink.dataset.goto)) {
                    const gotoBlock = document.querySelector(menuLink.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top +
                                            pageYOffset - 
                                            document.querySelector("header").offsetHeight;
                    
                    if (menuIcon && menuIcon.classList.contains("_active")) {
                        menuIcon.classList.remove("_active");
                        menuBody.classList.remove("_active");
                        document.body.classList.remove("_lock");
                    }

                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: "smooth",
                    });

                    event.preventDefault();
                }
        });
    });
}