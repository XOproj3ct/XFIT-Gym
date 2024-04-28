const username = document.querySelector('.username-field');
const password = document.querySelector('.password-field');
const submit = document.querySelector('.submit-btn');

function validateForm() {
	const userValue = username.value.trim();
	const passValue = password.value.trim();
	
	if (userValue && passValue) {
		submit.classList.add('valid');
	}else{
		
		submit.classList.remove('valid');
	}
}

username.addEventListener('input',validateForm)
password.addEventListener('input',validateForm)
