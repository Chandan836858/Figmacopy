document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.change');

    boxes.forEach(change => {
        change.addEventListener('click', () => {
            change.classList.toggle('expanded');
        });

        const colorInput = change.querySelector('input[type="color"]');
        const sizeInput = change.querySelector('input[type="range"]');

        colorInput.addEventListener('input', (e) => {
            change.style.backgroundColor = e.target.value;
        });

        sizeInput.addEventListener('input', (e) => {
            change.style.height = `${e.target.value}px`;
        });
    });
});