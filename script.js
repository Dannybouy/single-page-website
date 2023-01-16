// For the hamburger Menu

const hamburgerMenu = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburgerMenu.addEventListener('click', () => {
   hamburgerMenu.classList.toggle("active") 
   navMenu.classList.toggle("active") 
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () =>{
    hamburgerMenu.classList.remove("active")
    navMenu.classList.remove("active")
}))



// Code for Image changing
const imagesUrls = [
    "/images/photo_2022-08-19_14-25-55.jpg",
    "/images/photo_2022-08-19_14-26-18.jpg",
    "/images/photo_2022-08-19_14-26-22.jpg",
    "/images/photo_2022-08-19_14-26-26.jpg",
    "/images/photo_2022-08-19_14-26-38.jpg",
    "/images/photo_2022-08-19_14-26-45.jpg"
];

let activeImage = document.getElementById("active-image")
console.log(activeImage.src)

window.addEventListener("scroll", () => {
    let activeImageIndex = Math.floor(window.scrollY / (window.innerHeight) /imagesUrls.length)
    activeImage.src = imagesUrls[activeImageIndex]
    
})


