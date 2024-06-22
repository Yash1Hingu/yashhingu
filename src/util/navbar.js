export function openNav() {
    document.querySelector(".navbar_flex").style.width = "100vw";
    document.querySelector(".navbar_flex").style.height = "100vh";
}
export function closeNav() {
    document.querySelector(".navbar_flex").style.width = "0";
    document.querySelector(".navbar_flex").style.height = "100%";
}