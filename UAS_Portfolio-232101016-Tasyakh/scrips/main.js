//Toogle & responsive
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toogle-burger");
    });
};

navSlide();

//clear form before unload
window.onbeforeunload =  () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};