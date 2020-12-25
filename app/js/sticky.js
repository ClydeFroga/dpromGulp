function stickyScrollWatch() {
  if(document.documentElement.clientWidth >= 768) {
    let foxy = document.querySelectorAll('.single__contentSidebarBlock .foxy')

    let list = []
    foxy.forEach((item) => {
      list.push(item)
    })
    list.push(document.querySelector('.foxyA'))

    let rand = Math.floor(Math.random() * (3 - 0)) + 0;

    let sidebarHeight = document.querySelector('.single__end').offsetTop + 500
    console.log(sidebarHeight)
    document.addEventListener('scroll', foxySticky)

    function foxySticky() {
      if(scrollY > sidebarHeight) {
        if(!list[rand].classList.contains('stickyFox')) {
          list[rand].classList.add('stickyFox')
        }
      } else {
        if(list[rand].classList.contains('stickyFox')) {
          list[rand].classList.remove('stickyFox')
        }
      }
    }
  }
}