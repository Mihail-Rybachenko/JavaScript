let coordinatesDisplay = document.querySelector('#coordinates');
    document.addEventListener('mousemove', function(event) {
        let x = event.clientX;
        let y = event.clientY;
        coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
    });