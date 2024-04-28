document.addEventListener('DOMContentLoaded',()=>{
    const footer = `<footer>
    <div class="container">
    
    <div class="logo "> XFIT </div>
    
    <p class="copyright">
    &copy; 2024 All rights reversed &nbsp;<span>XFIT-Gym</span>
    </p>
    <div class="footer-links">
    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
    <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    </div>	
    </div>
    </footer>`
    document.body.innerHTML += footer
    
    document.head.innerHTML += `<link rel="stylesheet" href="../css/footer.css">`
    
})