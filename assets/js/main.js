function scrollHeader(){
const header=document.getElementById('header')

if(this.scrollY >=50)header.classList.add('scroll-header');
else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

//Show Modal

const modalViews = document.querySelectorAll('.services_modal'),
 modalBtns=document.querySelectorAll('.services_button'),
 modalClose=document.querySelectorAll('.services_modal-close')

let modal= function(modalClick){
    modalViews[modalClick].classList.add('show-modal')
}
modalBtns.forEach((modalBtns,i)=>{
    modalBtns.addEventListener('click',()=>{
        modal(i)
    })
})

modalClose.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalViews)=>{
            modalViews.classList.remove('show-modal')
        })
    })
})

// Show Menu

const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu mobile
const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

//Change Background Header
function scrollHeader(){
    const header=document.getElementById('header')
    if(this.scrollY >=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

// Mixiup filter
let mixerPortfolio=mixiup('.work_container', {
    selectors:{
        target:'.work_card '
    },
    animation:{
        duration:300
    }
});

//link active work
const linkWork=document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(L=>l.classList.remove('.active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> l.addEventListener('click',activeWork))

// Testimonial swiper

const swiperTestimonial=new Swiper('.testimonial_container',{
    spaceBetween:24,
    loop:true,
    grabCursor:true,

    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
            spaceBetween:48,
        },
    }
});



// SCROLL ACTIVE LINK
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop - 58,
        sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListerner('scroll',scrollActive)

// DARK LIGHT THEME
const themeButton= document.getElementById('theme-Button')
const lightTheme='light-theme'
const iconTheme='bx-sun'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark':'light'
const getCurrentIcon = () => document.classList.containes(iconTheme) ? 'bx bx-moon' :'bx bx-sun '

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add':'remove'](iconTheme)
}

themeButton.addEventListener('click',() => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
})


const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay:400,

})
sr.reveal('.home_data')
sr.reveal('.home_handle',{delay:700})
sr.reveal('.home_social','.home_scroll',{delay:900,origin:'bottom'})



