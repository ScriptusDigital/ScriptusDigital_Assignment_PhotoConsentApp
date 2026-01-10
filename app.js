//-----TEXT INPUT VALUES LOG TO CONSOLE-----//

function setStatus(message, isError) {
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
    statusMessage.style.color = isError ? 'red' : 'green';}

document.getElementById('consent-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('participant-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const specialInstructions = document.getElementById('special').value.trim();


      const usageConsents = [];
    document.querySelectorAll('.BoxInput:checked').forEach(checkbox => {
        usageConsents.push(checkbox.value);
    });
      //-----Warning Required inputs -----//
      if (name === '' || email === '') {
    setStatus('Please fill in all required fields.', true);
    return;
}

    //-----Warning Checkbox inputs-----//
if (usageConsents.length === 0) {
    setStatus('Please select at least one usage consent option.', true);
    return;
}
setStatus('Form submitted successfully!', false);


    console.log('Partcipant Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phone);
    console.log('Special Instructions:', specialInstructions);
   console.log('Usage Consents:', usageConsents.join(', '));


});


