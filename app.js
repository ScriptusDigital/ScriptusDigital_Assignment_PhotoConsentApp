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

document.getElementById('consent-form').addEventListener('reset', function() {
    setStatus('', false);
});


    //-----Character Counter in Special Instructions-----//
    const specialCount = document.getElementById('specialcount');
    const specialInstructionsInput = document.getElementById('special');

    specialInstructionsInput.addEventListener('input', function() {
        const count = this.value.length;
        specialCount.textContent = count + ' characters';
    });


        //-----SignaturePad-----//
        const canvas = document.getElementById('SignaturePad');
        const ctx = canvas.getContext('2d');
        let drawing = false;
        canvas.addEventListener('mousedown', () => { drawing = true; });
        canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });
        canvas.addEventListener('mouseout', () => { drawing = false; ctx.beginPath(); });
        canvas.addEventListener('mousemove', draw);

        function draw(event) {
            if (!drawing) return;
           const rect = canvas.getBoundingClientRect();
           ctx.fillStyle = '#000000';
           ctx.beginPath();
           ctx.arc(event.clientX - rect.left, event.clientY - rect.top, 3, 2, Math.PI * 2);
           ctx.fill();
        }

