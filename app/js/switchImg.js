let start = Date.now();

let switchObj = {
    images: [],
    photoBlock: '',
    photoBlockImg: '',
    stock: '',
    width: '',
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    prev: 99,
    setImages() {
        this.images = ['https://picsum.photos/800/600?random=1', 'https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3', 'https://picsum.photos/800/600?random=4', 'https://picsum.photos/800/600?random=5']
        if(this.images === null) return
        this.setVariables()
    },
    setVariables() {
        this.photoBlock = document.querySelector('.bigAndSlider__Big.photoBlock')
        this.photoBlockImg = document.querySelector('.bigAndSlider__Big.photoBlock img')
        this.stock = this.photoBlockImg.src
        this.width =  this.photoBlock.clientWidth

        this.one = this.photoBlock.clientWidth / this.images.length
        this.two = this.one * 2
        this.three = this.one * 3
        this.four = this.one * 4
        this.five = this.one * 5

        let func = this.listen.bind(switchObj)
        let func2 = this.reset.bind(switchObj)

        this.addDiv()
        this.photoBlock.addEventListener('mousemove', func)
        this.photoBlock.addEventListener('mouseout', func2)
    },
    switchImg(num) {
        if(this.images[num]) {
            if(num !== this.prev) {
                this.prev = num
                this.photoBlockImg.src = this.images[num]
                this.resetColor()
                this.photoBlock.children[0].childNodes[num].style.backgroundColor = 'green'
            }
        } else {
            this.photoBlockImg.src = this.stock
        }
    },
    addDiv() {
        let str = '<div class="photoBlock__visual">'
        for (let i = 0; i < this.images.length; i++) {
            str += '<div></div>'
        }
        str += '</div>'
        this.photoBlock.insertAdjacentHTML('afterbegin', str)
    },
    resetColor() {
        for(let i = 0; i < this.images.length; i++) {
            this.photoBlock.children[0].childNodes[i].style.backgroundColor = ''
        }
    },
    reset() {
        this.photoBlockImg.src = this.stock
        this.prev = 99
        this.resetColor()
    },
    listen(e) {
            if (e.layerX < this.one) {
                this.switchImg(0)
            }
            else if (e.layerX > this.one && e.layerX < this.two) {
                this.switchImg(1)
            }
            else if (e.layerX > this.two && e.layerX < this.three) {
                this.switchImg(2)
            }
            else if (e.layerX > this.three && e.layerX < this.four) {
                this.switchImg(3)
            }
            else if (e.layerX > this.four) {
                this.switchImg(4)
            }
    },
}

switchObj.setImages()

let end = Date.now();
// console.log(end - start)