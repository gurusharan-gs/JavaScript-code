let image = document.querySelector(".slider-image");
let translate = 0;

setInterval(() => {
  if (translate >= 0 && translate < 400) {
    translate += 100;
  } else {
    translate - 0;
  }
  console.log("hii");
  image.style.transition = "2s";
  image.style.transform = `translateX(${-translate}%)`;
}, 3000);
