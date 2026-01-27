
//-----SIGNATURE PAD INITIAL SETTING-----//

         let hasSignature = false;

      
  //----- INPUT VALUES AND LOG TO CONSOLE-----//

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

      //-----Warning For Required inputs -----//
      if (name === '' || email === '') {
    setStatus('Please fill in all required fields.', true);
    return;
}
 

    //-----Warning Checkbox inputs-----//
if (usageConsents.length === 0) {
    setStatus('Please select at least one usage consent option.', true);
    return;}

        //-----No signature error warning -----//
    if (!hasSignature) {
    setStatus('Please provide your digital signature.', true);
    console.log('Has Signature:', hasSignature);
    return;
}  

 //-----SUCCESS AND LOG -----//
setStatus('Form submitted successfully!', false);


    console.log('Partcipant Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phone);
    console.log('Special Instructions:', specialInstructions);
   console.log('Usage Consents:', usageConsents.join(', '));
console.log('Has Signature:', hasSignature);

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

  //-----Form Reset-----//

document.getElementById('consent-form').addEventListener('reset', function() {
    setStatus('', false);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSignature = false;
});


       let drawing = false;
       let tool = 'pen';

       ctx.lineCap = 'round';
       ctx.lineWidth = 2;

function getCanvasPosition(event) {
    const rect = canvas.getBoundingClientRect();
   if (event.touches && event.touches.length > 0) {
    return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top
    };
}
return {
        x: event.offsetX,
        y: event.offsetY
    };
}

       function startDrawing(event) {
            event.preventDefault();   
           drawing = true;
           const pos = getCanvasPosition(event);
           ctx.beginPath();
              ctx.moveTo(pos.x, pos.y ); 
       }



              function draw(event) {
           if (!drawing) return; 

event.preventDefault();
hasSignature = true;
const pos = getCanvasPosition(event);
               ctx.strokeStyle = tool === 'pen' ? 'black' : 'white';
               ctx.lineWidth = tool === 'pen' ? 2 : 5;
               ctx.lineTo(pos.x, pos.y);
               ctx.stroke();

               ctx.beginPath();
               ctx.moveTo(pos.x, pos.y);
           }
        
           function stopDrawing() {
           drawing = false;
           ctx.beginPath();
       }

       canvas.addEventListener('mousedown', startDrawing);
       canvas.addEventListener('mousemove', draw);
       canvas.addEventListener('mouseup', stopDrawing);
       canvas.addEventListener('mouseout', stopDrawing);

       canvas.addEventListener('touchstart', startDrawing, {passive: false });
       canvas.addEventListener('touchmove', draw, {passive: false  });
       canvas.addEventListener('touchend', stopDrawing);
              canvas.addEventListener('touchcancel', stopDrawing);

      

    //-----ERROR STATUS WARNING-----//

function setStatus(message, isError) {
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
statusMessage.style.color = message === ''?'' : (isError ? 'red' : 'green');
}