export function openNav() {
    document.querySelector(".navbar_flex").style.width = "100%";
    document.querySelector(".navbar_flex").style.height = "100%";
}
export function closeNav() {
    document.querySelector(".navbar_flex").style.width = "0";
    document.querySelector(".navbar_flex").style.height = "100%";
}