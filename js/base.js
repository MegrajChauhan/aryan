let getelemid = document.getElementById.bind(document);
let getelemcl = document.getElementsByClassName.bind(document);

// For the automatic selection of the nav-bar links
let nav_bar = getelemcl("nav-bar");
let nav_pic = nav_bar[0].firstElementChild;
let nav_list = nav_bar[0].lastElementChild;
let nav_all_links = nav_list.children;
let last_selected_list = 0;

for(let i = 0; i < nav_all_links.length; i++) {
    let curr = nav_all_links[i].firstElementChild;
    curr.addEventListener("click", () => {
        nav_all_links[last_selected_list].firstElementChild.classList.remove("selected");
        curr.classList.add("selected");
        last_selected_list = i; // update this
    });
}
