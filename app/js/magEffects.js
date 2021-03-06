if(document.documentElement.clientWidth > 1024) {
    addL()
}

function addL(offset = 0) {
    let items = document.querySelectorAll('.magazine__item')
    let cy = items[0].offsetHeight / 2, cx = items[0].offsetWidth / 2;
    let clientY = '', clientX = '';
    let off = offset
    for(let item of items) {
        item.addEventListener('mousemove', (e) => {
            clientY = e.layerY
            clientX = e.layerX
            updateMe(item)
        })
        item.addEventListener('mouseout', () => {
            reset(item)
        })
    }

    function updateMe(item) {
        let dx = clientX - cx
        let dy = clientY - cy
        let tiltx = dy / cy
        let tilty = dx / cx
        let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
        let degree = radius * 12

        gsap.to(item.children[0].children[0],  {
            rotateY: tilty * 30,
            rotateX: -tiltx * 30,
            rotateZ: 0,
            angle: degree,
        })
    }

    function reset(item) {
        gsap.to(item.children[0].children[0],  {
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0,
            angle: 0,
        })
    }
}


