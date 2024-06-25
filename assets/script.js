const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides)

// selection des elements html

const flechegauche = document.querySelector(".arrow_left")
const flechedroite = document.querySelector(".arrow_right")
const dots = document.querySelectorAll(".dot")

let currentIndex = 0

// les fleches EVENTLISTENERS

flechegauche.addEventListener("click", previousSlide)
flechedroite.addEventListener("click", nextSlide)

console.log(flechegauche, flechedroite)

// les points
	dots.forEach((dot, index) => {
		dot.addEventListener("click", function() {
			currentIndex = index
			displaySlides()
		})
	})


// NAVIGATION FUNCTION
function nextSlide() { 
currentIndex++
if (currentIndex > slides.length - 1) {
	currentIndex = 0
}
console.log('valeur de currentIndex :' + currentIndex)
displaySlides()
}

function previousSlide() { 
	currentIndex--
	if (currentIndex < 0) {
		currentIndex = slides.length - 1
	}
	console.log('valeur de currentIndex :' + currentIndex)
	displaySlides()
}
// DISPLAY FUNCTION (DISPLAY SLIDES)
function displaySlides() {
	const bannerImg = document.querySelector(".banner-img")
	const bannerTagline = document.querySelector("#banner p")

	bannerImg.src = "assets/images/slideshow/" + slides[currentIndex].image
	bannerTagline.innerHTML = slides[currentIndex].tagLine

	// GESTION DES POINTS ETAT VISUELS

	dots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	})
}
console.log(displaySlides())