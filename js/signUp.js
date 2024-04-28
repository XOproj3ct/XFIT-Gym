const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')
const submit = document.getElementById('submit')
const errorField = document.querySelectorAll('.error-message')
const valid = document.querySelectorAll('.valid')
const invalid = document.querySelectorAll('.invalid')

const correctBorder = "1px solid #28A745"
const normBorder = "1px solid #ccc"
const wrongBorder = "1px solid red"

let userValid = false;
let emailValid = false;
let passValid = false;
let cPassValid = false;
function greenBorder(element,fieldNumber){
    fieldNumber--;
    element.style.border = correctBorder
    valid[fieldNumber].classList.remove('invalid')
    valid[fieldNumber].style.display = 'block'
}
function redBorder(element, fieldNumber){
    fieldNumber--;
    element.style.border = wrongBorder
    valid[fieldNumber].classList.remove('valid')
    valid[fieldNumber].style.display = 'block'
}
function normalBorder(element,fieldNumber){
    fieldNumber--;
    valid[fieldNumber].classList.add('valid')
    valid[fieldNumber].classList.add('invalid')
    valid[fieldNumber].style.display = 'none'
    errorField[fieldNumber].textContent = ''
}
// ==============================================
// ==============================================
// ==============================================
// ==============================================
username.addEventListener('focus',()=>{
    normalBorder(username,1)
})
function blurUsername(){
    const userNameText = username.value;
    // If Not Empty
    if(userNameText){ 
        // Handle above 8 characters
        if(userNameText.length > 8){
            redBorder(username,1)
            valid[0].classList.remove('valid');
            errorField[0].textContent = "Max length is 8 characters"
            userValid= false;
            // if isn't empty and under or equal 8 then correct ✅
        }else{
            greenBorder(username,1)
            valid[0].classList.remove('invalid')
            userValid= true;
        }
        valid[0].style.display = 'block'
    }else{
        redBorder(username,1)
        userValid= false;
        valid[0].classList.remove('valid')
        errorField[0].textContent ="Username field is empty."
        valid[0].style.display = 'block'
    }
}
username.addEventListener('blur', blurUsername)
// ==============================================
// ==============================================
// ==============================================
// ==============================================
email.addEventListener('focus',(e)=>{
    normalBorder(e, 2)
})
function blurEmail(){
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    const regTest = regex.test(email.value)
    const empty = 'Email field is empty.'
    const invalidEmail = 'Invalid Email format'
    
    if(!regTest || !email.value){
        redBorder(email,2)
        errorField[1].textContent = (!email.value?empty:invalidEmail);
        emailValid = false;
    }else{
        greenBorder(email,2);
        emailValid = true;
    }
}
email.addEventListener('blur', blurEmail)
// ==============================================
// ==============================================
// ==============================================
// ==============================================
password.addEventListener('focus',(e)=>{
    normalBorder(e, 3)
})
let isValid;
function blurPassword(){
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,}$/;
    const passwordRegTest = passwordRegex.test(password.value)
    const empty = 'Password field is empty.'
    const invalidPass = 'Must has upper and lower chars. and digits'
    const maxDigits = 'Password length is between 8-16 char.'
    
    if(!passwordRegTest || !password.value){
        redBorder(password,3)
        errorField[2].textContent = 
            (!password.value)? // if empty
            empty:
            (password.value.length>16|| password.value.length<8)? // out of range
            maxDigits:invalidPass; // so, then it's invalid
            // isValid = false; // for comming use [confirm password]
            passValid = false;
    }else{
        greenBorder(password,3); // valid ✅
        // isValid = true; // for comming use [confirm password]
        passValid = true;
    }
}
password.addEventListener('blur', blurPassword)
// ==============================================
// ==============================================
// ==============================================
// ==============================================
confirm_password.addEventListener('focus',(e)=>{
    normalBorder(e,4);
})

function blurConfirmPassword(){
    if(password.value){
        if(password.value === confirm_password.value && passValid){
            greenBorder(confirm_password, 4);
            cPassValid = true;
        }else{
            redBorder(confirm_password, 4)
            cPassValid = false;
        }
    }else{
        redBorder(confirm_password,4)
        cPassValid = false;
    }
}
confirm_password.addEventListener('blur',blurConfirmPassword)
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// works after sumbitting without check the terms box
function checkTerms(){
    const label = document.querySelector('#terms+label')
    label.style.color = "red";
}

// ==============================================
// ==============================================
// ==============================================
// ==============================================
submit.addEventListener('click',async (e)=>{
    e.preventDefault()
    if(userValid&&emailValid&&passValid&&cPassValid&& gender.value != 'select'&&terms.checked){
        Swal.fire({
            title: "Done",
            text: "Submit Completed",
            icon: "success"
        });
        setTimeout(() => {
            window.location.assign('index.html')
        }, 1000);
    }else{
        blurUsername();
        blurEmail();
        blurPassword();
        blurConfirmPassword();
        checkTerms();
    }
})