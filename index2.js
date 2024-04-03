let steps = document.querySelectorAll(".Steps .step .num")
let circle = document.getElementById("circle")
let txtSlider = document.querySelectorAll(".txtSlider")
let nextStep = document.querySelectorAll(".nextStep")
let backStep = document.querySelectorAll(".backStep")

let active = 1
nextStep.forEach((e) => {
    e.addEventListener("click", (e) => {
        active++
        if (active > steps.length) {
            active = steps.length
        }
        Update()
    })
})


backStep.forEach((e) => {
    e.addEventListener("click", (e) => {
        active--
        if (active < 1) {
            active = 1
        }
        Update()
    })
})

const Update = () => {
    console.log(active)
    // console.log(num.length)
    // console.log(num[active - 1])

    // toggle class
    steps.forEach((step , e) => {
        if (e > active - 1) {
            step.classList.add("active")
            txtSlider[e].classList.add("noneDisplay")
        }
        else {
            step.classList.remove("active")
            txtSlider[e].classList.remove("noneDisplay")
        }
    })
}


const observe = new IntersectionObserver((observ) => {
    observ.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})
const heddinelements = document.querySelectorAll(".heddin");
heddinelements.forEach((el) => observe.observe(el));