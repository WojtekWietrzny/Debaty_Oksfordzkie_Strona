var images = ["zdjęcia/debaty-1.jpg", "zdjęcia/debaty-2.jpg", "zdjęcia/debaty-3.jpg"];
var currentIndex = 0;

function changeImage(direction) {
        var imgElement = document.getElementById("galeria-obraz");

        if (direction === "next") {
                currentIndex = (currentIndex + 1) % images.length;
        } else if (direction === "prev") {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
        }

        imgElement.src = images[currentIndex];
}

document.getElementById("btn-prev").addEventListener("click", function () {
        changeImage("prev");
});

document.getElementById("btn-next").addEventListener("click", function () {
        changeImage("next");
});
