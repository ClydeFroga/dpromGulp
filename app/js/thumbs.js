let a = document.querySelectorAll(".thumbs-rating-up");
let b = document.querySelectorAll(".thumbs-rating-down");
function addEvent(item) {
  let test = document.querySelectorAll(".thumbs-rating-voted");
  if (test.length > 0) {
    let voted = item.parentElement.querySelector(
      ".thumbs-rating-already-voted"
    );
    voted.classList.add("thumbs-rating-show");
    setTimeout(() => (voted.style.opacity = "0"), 2000);
    setTimeout(() => {
      voted.classList.remove("thumbs-rating-show");
      voted.style.opacity = "1";
    }, 2600);
  } else {
    item.classList.add("thumbs-rating-voted");
  }
}
if (a.length > 0) {
  for (let item of a) {
    item.addEventListener("click", () => addEvent(item));
  }
}
if (b.length > 0) {
  for (let item of b) {
    item.addEventListener("click", () => addEvent(item));
  }
}

