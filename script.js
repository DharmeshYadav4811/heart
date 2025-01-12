const heart = document.getElementById('heart');
const colorInputs = document.querySelectorAll('input[name="color"]');

colorInputs.forEach(input => {
    input.addEventListener('change', (event) => {
        const selectedColor = event.target.value;
        heart.style.backgroundColor = selectedColor;
        heart.style.setProperty('--heart-color', selectedColor);
    });
});
