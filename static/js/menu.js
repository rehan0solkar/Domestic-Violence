const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("menuOverlay");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
        sideMenu.classList.add("openMenu");
        overlay.classList.add("showOverlay");
        document.body.classList.add("menu-open");
    } else {
        closeMenu();
    }
});

overlay.addEventListener("click", closeMenu);

sideMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});

function closeMenu() {
    sideMenu.classList.remove("openMenu");
    overlay.classList.remove("showOverlay");
    document.body.classList.remove("menu-open");
    menuOpen = false;
}
