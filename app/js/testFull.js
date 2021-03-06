function fullPage() {
    let block = document.querySelector('.bigAndSlider__Big');
    block.addEventListener('click', begin);
    function begin(e) {
        e.preventDefault();
        block = ''
        block = document.querySelector('.bigAndSlider__Big');
        let img = block.children[0].children[0];
        let sizes = img.getBoundingClientRect();
        let fullBlock = document.querySelector('.testFull');
        let testImg = fullBlock.children[0];
        let scroll = pageYOffset

        function addSizes() {
            fullBlock.style.display = 'block';
            fullBlock.style.transition = 'all 0s';
            fullBlock.style.top = sizes.top + scroll + 'px';
            fullBlock.style.right = sizes.right + 'px';
            fullBlock.style.left = sizes.left + 'px';
            fullBlock.style.width = sizes.width + 'px';
            fullBlock.style.height = sizes.height + 'px';
            testImg.src = img.src;
            setTimeout(() => {
                fullBlock.style.transition = '';
                fullBlock.style.top = '';
                fullBlock.style.right = '0';
                fullBlock.style.left = '0';
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
            // let testLogo = fullBlock.querySelector('.testFull__logo');

            testText.textContent = text.innerText;
            testText.classList.add('release');

            // testLogo.classList.add('release');

            deleteAndLoad(block.dataset.srcSet, testText);
        }

        function deleteAndLoad(id, title) {
            // document.body.style.overflow = 'hidden'
            let testRead = fullBlock.querySelector('.testFull__read');

            testRead.classList.add('release');

            // let content = document.querySelector('.spec')

            // content.remove()

            // loadPost(id);
        }

        function loadPost(id) {
            jQuery(function($){
                let data = {
                    'action': 'testFull',
                    'id': id
                };

                $.ajax({
                    url:ajaxurl,
                    data:data,
                    type:'POST',
                    success:function(data){
                        if( data ) {
                            let testRead = fullBlock.querySelector('.testFull__read');
                            $('header').after(data);
                            testRead.classList.add('release');
                            // document.body.style.overflow = ''
                            slider()
                            setTimeout(stickyScrollWatch, 1000)
                            addEventListener("popstate",function(e){
                                window.location.reload()
                            },{
                                once: true
                            });
                        }
                    },
                })
            })
        }

    }
}

if (document.documentElement.clientWidth > 1024) {
    window.addEventListener('load', fullPage);
}
