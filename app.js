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

    const usageConsents = [];
    document.querySelectorAll('.BoxInput:checked').forEach(function(checkbox) {
        usageConsents.push(checkbox.value);
    });
    console.log('Usage Consents:', usageConsents.join(', '));

});
