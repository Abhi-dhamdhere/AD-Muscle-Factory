/*============== Show menu ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*========== MENU SHOW ========== */
/* VALIDATE IF CONSTANT EXISTS */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========== MENU HIDDEN ========= */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*============ REMOVE MENU MOBILE ============ */
const navLink = document.querySelectorAll('.nav--link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*================== CHANGE BACKGROUND HEADER ================*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg--header')
        : header.classList.remove('bg--header')
}
window.addEventListener('scroll', scrollHeader)

/*================== SCROLL SECTIONS ACTIVE LINK ================= */

const scrollActive = () => {
    const scrollY = window.pageXOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}

/* ================= SHOW SCROLL UP ================*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*===================== SCROLL REVEAL ANIMATION ==================*/

const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home--data, .footer--container, .footer--group')
sr.reveal('.home--img', { delay: 700, origin: 'bottom' })
sr.reveal('.logos--img, program--card', { interval: 100 })
sr.reveal('.choose--img, .calculate-content', { origin: 'left' })
sr.reveal('.choose--content, .calculate-img', { origin: 'right' })

/*===================== CALCULATE JS =====================*/

const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()

    // check if the fields have a value
    if (calculateCm.value === '' || calculateKg.value === '') {
        // add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //show message
        calculateMessage.textContent = 'Fill in the Height and Weight'

        // Remove message
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        // BMI Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))
        // show your health status
        if (bmi < 18.5) {
            // add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are skinny'
        }
        else if (bmi < 25) {
            // add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are healthy'
        }
        else {
            // add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are overweight'
        }

        // to clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        // remove message after five seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 5000)
    }
}
calculateForm.addEventListener('submit', calculateBmi)


/*======================== EMAIL US =========================*/

const contactForm = document.getElementById('calculate-form'),
    contactMessage = document.getElementById('calculate-message'),
    contactUser = document.getElementById('calculate-user')

const sendEmail = (e) => {
    e.preventDefault()

    // check if the field has a value
    if (contactUser.value === '01') {
        // add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        // show message
        contactMessage.textContent = 'You must enter your email'

        //remove message after 5 second
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
    } else {
        // serviceID - -templateID - #form - publickey
        emailjs.sendForm('service_0pesqq9', 'template_qj39sbe', '#contact-form', 'asFdn66JEkRSu_AG7')
            .then(() => {
                // show message and add color
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully'

                // remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                // mai sending error
                alert('Something is wrong .....', error)
            })
        // To clear the input field
        contactUser.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)