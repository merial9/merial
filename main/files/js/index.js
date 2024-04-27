
function imgScaler() {
    img = document.getElementById("img1");
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";


}
function resetScaler() {

    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}
