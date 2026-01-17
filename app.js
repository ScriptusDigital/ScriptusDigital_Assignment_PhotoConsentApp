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

   //-----Form Reset-----//

document.getElementById('consent-form').addEventListener('reset', function() {
    setStatus('', false);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


    //-----Character Counter in Special Instructions-----//
    const specialCount = document.getElementById('specialcount');
    const specialInstructionsInput = document.getElementById('special');

    specialInstructionsInput.addEventListener('input', function() {
        const count = this.value.length;
        specialCount.textContent = count + ' characters';
    });

 //-----SignaturePad-----//
      // Based on tutorial from https://blog.logrocket.com/implementing-signature-pad-javascript/---///
       const canvas = document.getElementById('SignaturePad');
       const ctx = canvas.getContext('2d');
       let drawing = false;
       let tool = 'pen';

       ctx.lineCap = 'round';
       ctx.lineWidth = 2;

       function startDrawing(event) {
           drawing = true;
           ctx.beginPath();
              ctx.moveTo(event.offsetX, event.offsetY); 
       }
              function draw(event) {
           if (!drawing) return; 


               ctx.strokeStyle = tool === 'pen' ? 'black' : 'white';
               ctx.lineWidth = tool === 'pen' ? 2 : 5;
               ctx.lineTo(event.offsetX, event.offsetY);
               ctx.stroke();

               ctx.beginPath();
               ctx.moveTo(event.offsetX, event.offsetY);
           }
        
           function stopDrawing() {
           drawing = false;
           ctx.beginPath();
       }

       canvas.addEventListener('mousedown', startDrawing);
       canvas.addEventListener('mousemove', draw);
       canvas.addEventListener('mouseup', stopDrawing);
       canvas.addEventListener('mouseout', stopDrawing);

       canvas.addEventListener('touchstart', startDrawing);
       canvas.addEventListener('touchmove', draw);
       canvas.addEventListener('touchend', stopDrawing);
              canvas.addEventListener('touchcancel', stopDrawing);

            
              document.getElementById('stroke-style').addEventListener('change', function(event) {
       tool = event.target.value;
    ctx.lineWidth = tool === 'pen' ? 2 : 5;    });