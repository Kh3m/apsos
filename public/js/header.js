const liNav = document.querySelector("#bottom-header nav ul");
const signInAnchor = document.querySelector("#user a:last-child");
const modal = document.querySelector("div#modal");
    
let clickCount = 1;

liNav.addEventListener("click", ( event ) => {
    if (event.target.nextSibling === null) {
        return;
    }
    if (++clickCount % 2 === 0) {
        event.target.nextSibling.nextSibling.style.transform = "translateY(0)";
        event.target.nextSibling.nextSibling.style.opacity = "1";
        event.target.nextSibling.nextSibling.style.height = "auto";
        event.target.children[0].style.transform = "rotate(180deg)";
    } else {
        event.target.nextSibling.nextSibling.style.transform = "translateY(5px)";
        event.target.nextSibling.nextSibling.style.opacity = "0";
        event.target.nextSibling.nextSibling.style.height = "0";
        event.target.children[0].style.transform = "rotate(0deg)";

    }
});

signInAnchor.addEventListener("click", ( event ) => {
    event.preventDefault();
    modal.style.display = "block";
});