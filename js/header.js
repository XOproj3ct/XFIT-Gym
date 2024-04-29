document.addEventListener('DOMContentLoaded',()=>{
    const mainColor = "#ff4500"
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
    function myFunction() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = `${scrolled}%`;
    }
    
    // import header HTML CSS  
    /*
    ============================== Read before use ==============================
    --> You need to add <header id="header"></header> in your html file
    */

const header = document.getElementById('header')
header.innerHTML = `<div class="container">
<div class="left-header">
    <a href="index.html" alt="logo"><h1>XFIT</h1></a>
    <div>
        <i class="fa-solid fa-sun hide-moon-sun"></i>
        <i class="fa-solid fa-moon"></i>
    </div>
    <a class="donation" href="donation.html">
        <div>Donation</div>
        <div class="smile"><i class="fa-solid fa-heart" style="color:red"></i></div>
    </a>
</div>

<div class="nav-links">
    <i class="fa-solid fa-bars bars"></i>
    <i class="fa-solid fa-x x hide-bars-x"></i>
    
    <ul class="links hide-bars-x">
        <li ">
            <a href="index.html" id="index-link" >Home</a>
        </li>
        
        <!-- About -->
        <li >
            <a href="about.html" id="about-link">About</a>
        </li>
        
        <!-- Services -->
        <li id="services-link">
            <div class="services-nav">
                <div class="serv-link">
                    Services
                    <i
                        class="fa-solid fa-angle-down"
                    ></i>
                </div>

                <ul
                    class="nav-serv-list hide-serv-links"
                >
                    <div>
                        <li>
                            <a
                                href="facilities.html"
                                >Facilities</a
                            >
                        </li>
                    </div>
                    <div>
                        <li>
                            <a
                                href=" membership.html"
                                >Membership</a
                            >
                        </li>
                    </div>
                    <div>
                        <li>
                            <a
                                href=" classes.html"
                                >Classes</a
                            >
                        </li>
                    </div>
                    <div>
                        <li>
                            <a
                                href=" testimonials.html"
                                >Testimonials</a
                            >
                        </li>
                    </div>
                </ul>
            </div>
        </li>
        
        <!-- Events -->
        <li>
            <a href="Events.html" id="events-link">Events</a>
        </li>
        
        <!-- Contact -->
        <li>
            <a href="contact.html"  id="contact-link">Contact</a>
        </li>
        <!--index.html#contact-->
        <!-- Store -->
        <li >
            <a href="store.html" id="store-link">Store</a>
        </li>
        
        <!-- Blog -->
        <li >
            <a href="blog.html" id="blog-link">Blog</a>
        </li>
        
        <!-- Blog -->
        <li >
            <a href="survey.html" id="sruvey-link">Survey</a>
        </li>
        
        <!-- FAQ -->
        <li >
            <a href="FAQ.html" id="sruvey-link">FAQ</a>
        </li>
    </ul>
</div>
</div>

<div class="top-progress-bar">
<div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
</div>
</div>`
// services 
const servLink = document.querySelector('.serv-link');
const servList = document.querySelector('.nav-serv-list');

servLink.addEventListener('click', ()=>{
    servList.classList.toggle('show-serv-links')
    servLink.classList.toggle('active-serv-link')
})

// header mobile version
const links= document.querySelector('.links');
const bars = document.querySelector('header .bars')
const close = document.querySelector('header .x')

bars.addEventListener('click',()=>{
    bars.classList.toggle('hide-bars-x')
    close.classList.toggle('hide-bars-x')
    links.classList.toggle('show-links')
})
close.addEventListener('click',()=>{
    close.classList.toggle('hide-bars-x')
    bars.classList.toggle('hide-bars-x')
    links.classList.toggle('show-links')
})


// ====== coloring nav target
const url = window.location.href;

// spectial case for [Services] 
if(window.location.href.includes('classes.html')){
    servLink.classList.toggle('active');
}

// other cases

const allLinks = document.querySelectorAll('header li a')
const linksWithId = [] // every id is [the name of the page-link] ex: home-link, services-link ...etc
for(let i = 0; i < allLinks.length; i++){
    if(allLinks[i].hasAttribute('id'))
        linksWithId.push(allLinks[i])
}

linksWithId.map(e=>{
    if(url.includes(e.id.split('-')[0])){
        e.style.color = mainColor;
    }
})



//  ==== CSS
const headerCss = `<link rel="stylesheet" href="../css/header.css">`
document.head.innerHTML += headerCss;



// Dark Mode Functions
let sun = document.querySelector('.fa-sun')
let moon = document.querySelector('.fa-moon')
const body = document.querySelector('body');

function dark_light(state){
    sun.classList.toggle("hide-moon-sun")
    moon.classList.toggle("hide-moon-sun")
    body.classList.toggle("dark-mode")
    window.localStorage.setItem("dark",state)
    
}

// checks local storage on load
let dark = window.localStorage.getItem("dark")
if(dark == "on"){
    dark_light("on")
}
// when sun
sun.addEventListener('click',()=>{
    dark_light("off");
    
})

// when moon
moon.addEventListener('click',()=>{
    dark_light("on");
})


})
