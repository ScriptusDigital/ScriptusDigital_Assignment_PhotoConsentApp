//-----TEXT INPUT VALUES LOG TO CONSOLE-----//
document.getElementById('consent-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('participant-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const specialInstructions = document.getElementById('special').value;

    console.log('Participant Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phone);
    console.log('Special Instructions:', specialInstructions);

});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log(this.value + ' consent:', this.checked);
    });
});