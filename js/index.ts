// Click to display the socials
const socials = document.getElementsByClassName("socials")[0];
const socials_table = document.getElementsByClassName("socials_table")[0];

socials.addEventListener("click", () => {
    // if (socials_table.classList.contains("hide"))
    //     socials_table.classList.replace("hide", "socials_table_display");
    // else
    // No matter the choices, the animation seems to be struggling
    setTimeout(
        () => {
            socials_table.classList.toggle("socials_table_display");
        }, 100);
});
