document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.btn-next');
    const prevButton = document.querySelector('.btn-prev');
    const submitButton = document.querySelector('.btn-submit'); 
    const steps = document.querySelectorAll('.progress-steps li');
    const formSteps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    function updateUI() {
        steps.forEach((step, index) => {
            step.classList.toggle('step-active', index === currentStep);
        });

        formSteps.forEach((form, index) => {
            form.style.display = (index === currentStep) ? 'block' : 'none';
        });

        prevButton.disabled = currentStep === 0;
        nextButton.style.display = (currentStep === steps.length - 1) ? 'none' : 'inline';
        submitButton.style.display = (currentStep === steps.length - 1) ? 'inline' : 'none';
    }

    nextButton.addEventListener('click', () => {
        if (currentStep < steps.length - 1 && validateForm()) {
            currentStep++;
            updateUI();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateUI();
        }
    });

    submitButton.addEventListener('click', () => {
        if (validateForm()) {
            console.log("Form submitted!");
        }
    });

    updateUI();

    function validateForm() {
        let isValid = true;
        const currentForm = formSteps[currentStep];

        const fullName = currentForm.querySelector("#fullName") ? currentForm.querySelector("#fullName").value.trim() : null;
        const fullNameError = currentForm.querySelector("#name-error");

        const ageRange = currentForm.querySelector("#ageRange") ? currentForm.querySelector("#ageRange").value : null;
        const ageError = currentForm.querySelector("#age-error");

        const gender = currentForm.querySelector("#Gender") ? currentForm.querySelector("#Gender").value : null;
        const genderError = currentForm.querySelector("#gender-error");

        if (fullName !== null) {
            if (fullName.length === 0) {
                fullNameError.textContent = "Full Name is required.";
                isValid = false;
            } else {
                fullNameError.textContent = '';
            }
        }

        if (ageRange !== null) {
            if (ageRange === "") {
                ageError.textContent = "Please select your age range.";
                isValid = false;
            } else {
                ageError.textContent = '';
            }
        }

        if (gender !== null) {
            if (gender === "") {
                genderError.textContent = "Please select your gender.";
                isValid = false;
            } else {
                genderError.textContent = '';
            }
        }

        return isValid;
    }
});
