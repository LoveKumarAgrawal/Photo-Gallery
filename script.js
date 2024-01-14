const images = document.querySelectorAll(".images");
images.forEach((element) => {
    element.addEventListener("click", (e) => {
        document.querySelector(".images.active").classList.remove("active");
        element.classList.add('active');
        const mainImage = document.getElementById('mainImg');
        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.src = element.querySelector('.image').src;
            mainImage.style.opacity = 1;
        }, 500);
    })
})
images[0].classList.add("active");

