let num = document.querySelectorAll(".Steps .step .num"),
    switchPlan = document.getElementById("switchPlan"), 
    price_total = document.getElementById("price_total"),
    numfour = document.getElementById("numfour"),
    numthree = document.getElementById("numthree"),
    numtwo = document.getElementById("numtwo"),
    numone = document.getElementById("numone"),
    priceoptionone = document.getElementById("priceoptionone"),
    priceoptiontwo = document.getElementById("priceoptiontwo"),
    priceoptionthree = document.getElementById("priceoptionthree"),
    nextStep = document.querySelectorAll(".nextStep"),
    circle = document.getElementById("circle"),
    free = document.querySelectorAll(".free"),
    form = document.getElementById("form"),
    namePer = document.getElementById("name"),
    phone = document.getElementById("phone"),
    email = document.getElementById("email"),
    step2Go = document.getElementById("step2Go"),
    errorName = document.getElementById("span_error_name"),
    errorEmail = document.getElementById("span_error_email"),
    errorPhone = document.getElementById("span_error_phone")


num.forEach((e) => {
    e.addEventListener("click", (e) => {
        num.forEach((e) => {
            e.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})


switchPlan.addEventListener("click", () => {
    if (circle.classList.contains("left")) { 
        circle.classList.remove("left")
        circle.classList.add("right")
        document.getElementById("priceAcrade").innerHTML = "$90/yr"
        document.getElementById("priceAdvanced").innerHTML = "$120/yr"
        document.getElementById("pricePro").innerHTML = "$150/yr"
        priceoptionone.innerHTML = 10
        priceoptiontwo.innerHTML = priceoptionthree.innerHTML = 20
        free.forEach((e) => {
            e.classList.remove("noneDisplay")
        })
    } else if (circle.classList.contains("right")) {
        circle.classList.remove("right")
        circle.classList.add("left")
        document.getElementById("priceAcrade").innerHTML = "$9/mo"
        document.getElementById("priceAdvanced").innerHTML = "$12/mo"
        document.getElementById("pricePro").innerHTML = "$15/mo"
        priceoptionone.innerHTML = "$1/mo"
        priceoptiontwo.innerHTML = priceoptionthree.innerHTML = "$2/mo"
        free.forEach((e) => {
            e.classList.add("noneDisplay")
        })
    }
})





// Form Validation


step2Go.addEventListener("click", () => {
    if (namePer.value == "" || phone.value == "" || email.value == "") { 
        if (namePer.value == "") {
            setTimeToout(errorName , namePer)
        }
        if(email.value == "") {
            setTimeToout(errorEmail , email)
        }
        if (phone.value == "") {
            setTimeToout(errorPhone , phone)
        }
    }
    else {
        console.log("Done")
    }
})

function setTimeToout(ele1, ele2 , text ) {
    ele1.innerHTML = text
    ele2.classList.add("redError")
    setInterval(() => {                
        ele1.innerHTML = ""
        ele2.classList.remove("redError")
    } , 2000)
}

// Animation Hide and Show

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



// ======

// active

let slidethree = document.getElementById("slidethree"),
    slidefour = document.getElementById("slidefour"),
    slideone = document.getElementById("slideone"),
    slidetwo = document.getElementById("slidetwo")
let laststep = document.querySelectorAll(".backStep")
let txtSlider = document.querySelectorAll(".txtSlider")

let emailregexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
let nameRegExp = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/
let stepone = document.getElementById("stepone")
let step2 = document.getElementById("step2")
let step3 = document.getElementById("step3")
let step4 = document.getElementById("step4")

nextStep.forEach((e) => {
    e.addEventListener("click", () => {
        if (!slideone.classList.contains("noneDisplay") && slidetwo.classList.contains("noneDisplay") && slidethree.classList.contains("noneDisplay") && slidefour.classList.contains("noneDisplay")) {
            if (namePer.value == "" || phone.value == "" || email.value == "") {
                if (namePer.value == "") {
                    setTimeToout(errorName, namePer , "Please provide your name")
                }
                if (email.value == "") {
                    setTimeToout(errorEmail, email , "Please provide your email")
                }
                if (phone.value == "") {
                    setTimeToout(errorPhone, phone , "Please provide your phone")
                }
            }
            else if (namePer.value.match(nameRegExp) && phone.value.match(phoneRegExp) && email.value.match(emailregexp)) {
                slidesTranslations(slideone, slidetwo)
                step2.classList.add("active")
                stepone.classList.remove("active")
            }
            else {
                if (!namePer.value.match(nameRegExp)) {
                    setTimeToout(errorName, namePer , "Please enter a valid name")
                }
                if (!phone.value.match(phoneRegExp)) {
                    setTimeToout(errorPhone, phone , "Please enter a valid phone number")
                }
                if (!email.value.match(emailregexp)) {
                    setTimeToout(errorEmail, email , "Please enter a valid email address")
                }
            }
        }
        else if (!slidetwo.classList.contains("noneDisplay") && slideone.classList.contains("noneDisplay") && slidethree.classList.contains("noneDisplay") && slidefour.classList.contains("noneDisplay")) {
            slidesTranslations(slidetwo, slidethree)
            step3.classList.add("active")
            step2.classList.remove("active")
        }
        else if (!slidethree.classList.contains("noneDisplay") && slideone.classList.contains("noneDisplay") && slidetwo.classList.contains("noneDisplay") && slidefour.classList.contains("noneDisplay")) {
            slidesTranslations(slidethree, slidefour)
            step4.classList.add("active")
            step3.classList.remove("active")
        }
        else if (!slidefour.classList.contains("noneDisplay") && slidetwo.classList.contains("noneDisplay") && slidethree.classList.contains("noneDisplay") && slideone.classList.contains("noneDisplay")) {
            slidesTranslations(slidefour, confirmSlide)
            confirmSlide.classList.add("flex")
        }
    })
})


laststep.forEach((e) => {
    e.addEventListener("click", () => {
        if (!slidetwo.classList.contains("noneDisplay") && slideone.classList.contains("noneDisplay") && slidethree.classList.contains("noneDisplay") && slidefour.classList.contains("noneDisplay")){
            slidesTranslations(slidetwo, slideone)
            step2.classList.remove("active")
            stepone.classList.add("active")
        }
        else if (!slidethree.classList.contains("noneDisplay") && slideone.classList.contains("noneDisplay") && slidetwo.classList.contains("noneDisplay") && slidefour.classList.contains("noneDisplay")) {
            slidesTranslations(slidethree, slidetwo)
            step3.classList.remove("active")
            step2.classList.add("active")
        }
        else if (!slidefour.classList.contains("noneDisplay") && slidetwo.classList.contains("noneDisplay") && slidethree.classList.contains("noneDisplay") && slideone.classList.contains("noneDisplay")) {
            slidesTranslations(slidefour, slidethree)
            step4.classList.remove("active")
            step3.classList.add("active")
        }
    })
})

function slidesTranslations(slide1 , slide2) {
    slide1.classList.add("noneDisplay")
    slide2.classList.remove("noneDisplay")
}

let plan = document.querySelectorAll(".plan")
let option = document.querySelectorAll(".option")

let obj = {
    arcade: {
        monthly: 9,
        yearly: 90,
        namepack: "Arcade"
    },
    advanced: {
        monthly: 12,
        yearly: 120,
        namepack: "Advanced"
    },
    pro: {
        monthly: 15,
        yearly:  150,
        namepack: "Pro"
    }   
}

plan.forEach((e) => {
    e.addEventListener("click", () => {
        plan.forEach((e) => {
            e.classList.remove("activePlan")
        })
        e.classList.add("activePlan")
    })
})

let spanType = document.getElementById("typecheck")
let priceoption = document.getElementById("priceoption")
let step3Go = document.getElementById("step3Go")


step3Go.addEventListener("click", () => {
    let time = ""
    if (circle.classList.contains("right")) {
        time = "Yearly"
    }
    else {
        time = "Monthly"
    }
    if (plan[0].classList.contains("activePlan")) {
        spanType.innerHTML = `${obj.arcade.namepack} ( ${time} ) `
        if (circle.classList.contains("left")) { 
            priceoption.innerHTML = obj.arcade.monthly
        }
        else if (circle.classList.contains("right")) {
            priceoption.innerHTML = obj.arcade.yearly
        }
    }
    else if (plan[1].classList.contains("activePlan")) {
        spanType.innerHTML = `${obj.advanced.namepack} ( ${time} ) `
        if (circle.classList.contains("left")) {
            priceoption.innerHTML = obj.advanced.monthly
        }else if (circle.classList.contains("right")) {
            priceoption.innerHTML = obj.advanced.yearly
        }
    }
    else if (plan[2].classList.contains("activePlan")) {
        spanType.innerHTML = `${obj.pro.namepack} ( ${time} ) `
        if (circle.classList.contains("left")) {
            priceoption.innerHTML = obj.pro.monthly
        } else {
            priceoption.innerHTML = obj.pro.yearly
        }
    }
})

let optionEle = document.querySelectorAll(".option")

optionEle.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (e.currentTarget.classList.contains("activeoption")) {
            e.currentTarget.classList.remove("activeoption")
            e.currentTarget.children[0].children[0].checked = false
        } else {
            e.currentTarget.classList.add("activeoption")
            e.currentTarget.children[0].children[0].checked = true
        }
    })

})

let CheckItem = document.querySelectorAll(".CheckItem")

let step4Go = document.getElementById("step4Go")
let optionsales = document.getElementById("optionsale")


let objOptions = {
    onlineService: {
        id: 1,
        name: "Online service",
        pricemonth: "$1/mo",
        priceyear: "$20/ye"
    },
    largerStorage: {
        id: 2,
        name: "Larger storage",
        pricemonth: "$2/mo",
        priceyear: "$20/ye"
    },
    customizableProfile: {
        id: 3,
        name: "Customizable profile",
        pricemonth: "$2/mo",
        priceyear: "$20/ye"
    }
}

let txtoption = document.getElementById("txt_option")
let price_option = document.getElementById("price_option")


let typePerPay = ""

let txtTotal = document.getElementById("txtTotal")

if (circle.classList.contains("left")) {
    typePerPay = "per month"
} else {
    typePerPay = "per year"
}
txtTotal.innerHTML = `Total (${typePerPay})`


optionEle.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (el.classList.contains("activeoption") && optionsales.children.length <= 3 && !optionsales.innerHTML.includes(e.currentTarget.children[0].children[1].children[0].innerHTML)) {
            optionsales.innerHTML += `
            <div class="optionSale_detail">
                <div class="">
                    <span class="txt_option" id="txt_option">${e.currentTarget.children[0].children[1].children[0].innerHTML}</span>
                    </div>
                    <div>
                    <span class="price_option" id="price_option"><span class="price_option_num" id="priceamount">${e.currentTarget.children[1].innerHTML}</span></span>
                </div>
                </div>
            `
            console.log(e.currentTarget.children[1].innerHTML)
            let pricetotalnum = document.getElementById("price_total")
            let arrprices = [...document.querySelectorAll(".price_option_num")]
            // pricetotal.innerHTML = priceoption.innerHTML + objOptions[e.currentTarget.children[0].children[1].children[0].innerHTML].priceyear
            console.log(e.currentTarget.children[1].innerHTML)
            console.log(pricetotalnum)
            if (arrprices.length >= 1) {
                pricetotalnum.innerHTML = +priceoption.innerHTML + +arrprices.reduce((a, b) => {
                    return a + +b.innerHTML
                }, 0)
            }
        }
    })
})





function changePlan() {
    slidefour.classList.add("noneDisplay")
    slidetwo.classList.remove("noneDisplay")
    optionsales.innerHTML = ""
    optionEle.forEach((opt) => {
        opt.classList.remove("activeoption")
    })
    price_total.innerHTML = ""
}