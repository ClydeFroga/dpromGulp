function fullPage() {
    let block = document.querySelector('.bigAndSlider__Big');
    block.addEventListener('click', begin);
    function begin(e) {
        block = document.querySelector('.bigAndSlider__Big');
        e.preventDefault();
        let img = block.children[0].children[0];
        let sizes = img.getBoundingClientRect();
        let fullBlock = document.querySelector('.testFull');
        let testImg = fullBlock.children[0];
        function addSizes() {
            testImg.src = img.src;
            fullBlock.style.display = 'block';
            fullBlock.style.top = sizes.top + 'px';
            fullBlock.style.right = sizes.right + 'px';
            fullBlock.style.left = sizes.left + 'px';
            fullBlock.style.bottom = sizes.bottom + 'px';
            fullBlock.style.width = sizes.width + 'px';
            fullBlock.style.height = sizes.height + 'px';
            setTimeout(() => {
                fullBlock.style.top = '';
                fullBlock.style.right = '';
                fullBlock.style.left = '';
                fullBlock.style.bottom = '';
                // fullBlock.style.width = ''
                // fullBlock.style.height  = ''
                fullBlock.classList.add('full');
            }, 300);
            setTimeout(() => {
                fullBlock.style.position = 'relative';
                addOther();
            }, 1000);
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        addSizes();
        function addOther() {
            let text = block.querySelector('.bigAndSlider__BigText').children[0];
            let testText = fullBlock.querySelector('h1');
            testText.textContent = text.innerText;
            testText.classList.add('release');
        }
    }
}
window.addEventListener('load', fullPage);
//# sourceMappingURL=test.js.map