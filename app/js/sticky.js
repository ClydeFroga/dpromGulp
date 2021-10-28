function stickyScrollWatch() {
  if (document.documentElement.clientWidth >= 768) {
    let foxy = document.querySelectorAll(".single__contentSidebarBlock .foxy");
    let blockSide = document.querySelector(".oneBlockSide");

    let list = [];
    foxy.forEach((item) => {
      list.push(item);
    });
    list.push(document.querySelector(".foxyA"));

    let rand = Math.floor(Math.random() * 3);

    let sidebarHeight = document.querySelector(".single__end").offsetTop + 500;

    document.addEventListener("scroll", foxySticky);

    function foxySticky() {
      if (scrollY > sidebarHeight) {
        if (!list[rand].classList.contains("stickyFox")) {
          list[rand].classList.add("stickyFox");
          try {
            blockSide.classList.add('stickyFox')
          } catch(e) {
            console.log(e)
          }
        }
      } else {
        if (list[rand].classList.contains("stickyFox")) {
          list[rand].classList.remove("stickyFox");
          try {
            blockSide.classList.remove('stickyFox')
          } catch(e) {console.log(e)}
        }
      }
    }
  }
}
