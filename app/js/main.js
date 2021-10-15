const cart = document.querySelector("#cart");
const cartbox = document.querySelector("#cartbox");
const toggle = document.querySelector("#toggle");
const menuLayer = document.querySelector("#menu__layer");
const menu = document.querySelector("#menu");
const imageViews = document.querySelectorAll("#imageView");
const imageGallery = document.querySelector("#imageGallery");
const imageGallery__close = document.querySelector(
  "#imageGallery__close-button"
);
const images = document.querySelectorAll("#image");
const slider = document.querySelector("#slider");
const slideBtns = document.querySelectorAll("#slideBtn");
const orderBtns = document.querySelectorAll("#orderBtn");
const order = document.querySelector("#order");
const orderAdd = document.querySelector("#orderAdd");
const cartNoti = document.querySelector("#cartNoti");
const cartBoxes = document.querySelectorAll("#cartBoxes");
const orderValue = document.querySelector("#orderValue");
const orderTotal = document.querySelector("#orderTotal");
const bin = document.querySelector("#bin");
const swipes = document.querySelectorAll("#swipe");
const body = document.querySelector("body");
var imageIndex = 1;
var activeIndex = 0;
cart.addEventListener("click", function () {
  cartbox.classList.toggle("Cartclose");
});
toggle.addEventListener("click", function () {
  cartbox.classList.add("Cartclose");
  toggle.classList.toggle("header__toggle-open");
  menuLayer.classList.toggle("menu__layer-open");
  menu.classList.toggle("menuclose");
  if (toggle.classList.contains("header__toggle-open")) {
    body.classList.add("no_scroll");
  } else {
    body.classList.remove("no_scroll");
  }
});
imageViews.forEach((imageView) => {
  imageView.addEventListener("click", function () {
    cartbox.classList.add("Cartclose");
    imageGallery.classList.remove("imageGallery__close");
    menuLayer.classList.toggle("menu__layer-open");
    body.classList.add("no_scroll");
    window.scrollTo(0, 0);
  });
});

imageGallery__close.addEventListener("click", function () {
  imageGallery.classList.add("imageGallery__close");
  menuLayer.classList.toggle("menu__layer-open");
  body.classList.remove("no_scroll");
});
images.forEach((image, index) => {
  image.addEventListener("click", function () {
    images.forEach((image2) => {
      image2.classList.remove("active");
    });

    if (index <= 3) {
      image.classList.add("active");
      images[index + 4].classList.add("active");
      activeIndex = index + 4;
      let num = Number(index) + 1;
      let src = "images/image-product-" + num + ".jpg";
      imageIndex = num;
      imageViews.forEach((imageView) => {
        imageView.src = src;
      });
    } else {
      image.classList.add("active");
      images[index - 4].classList.add("active");
      activeIndex = index - 4;
      let num = Number(index) - 3;
      let src = "images/image-product-" + num + ".jpg";
      imageIndex = num;
      imageViews.forEach((imageView) => {
        imageView.src = src;
      });
    }
  });
});
slideBtns.forEach((slideBtn, index) => {
  slideBtn.addEventListener("click", function () {
    let orgImage = slider.style.backgroundImage;
    let matches = orgImage.match(/(\d+)/);
    let orgImageIndex = orgImage.charAt(matches.index);
    if (index == 1) {
      let nextImageIndex = Number(orgImageIndex) + 1;
      if (orgImageIndex >= 4) {
        nextImageIndex = 1;
      }
      let nextImage = orgImage.replace(orgImageIndex, nextImageIndex);
      slider.style.backgroundImage = nextImage;
    } else if (index == 0) {
      let nextImageIndex = Number(orgImageIndex) - 1;
      if (orgImageIndex == 1) {
        nextImageIndex = 4;
      }
      let nextImage = orgImage.replace(orgImageIndex, nextImageIndex);
      slider.style.backgroundImage = nextImage;
    }
  });
});
orderBtns.forEach((orderBtn, index) => {
  orderBtn.addEventListener("click", function () {
    if (index == 1) {
      order.innerHTML = Number(order.innerHTML) + 1;
    } else if (index == 0) {
      if (order.innerHTML != 0) {
        order.innerHTML = Number(order.innerHTML) - 1;
      }
    }
  });
});
orderAdd.addEventListener("click", function () {
  cartNoti.classList.remove("noticlose");
  cartNoti.innerHTML = Number(order.innerHTML) + Number(cartNoti.innerHTML);
  orderValue.innerHTML = cartNoti.innerHTML;
  if (cartNoti.innerHTML > 0) {
    cartBoxes[0].classList.add("display-none");
    cartBoxes[1].classList.remove("display-none");
  }
  orderTotal.innerHTML = 125 * Number(orderValue.innerHTML);
});
bin.addEventListener("click", function () {
  cartNoti.classList.add("noticlose");
  cartNoti.innerHTML = 0;
  orderValue.innerHTML = cartNoti.innerHTML;
  cartBoxes[0].classList.remove("display-none");
  cartBoxes[1].classList.add("display-none");
});
swipes.forEach((swipe, index) => {
  swipe.addEventListener("click", function () {
    images.forEach((image) => {
      image.classList.remove("active");
    });
    if (index == 1) {
      if (imageIndex == 4) {
        imageIndex = 0;
      }
      imageIndex = imageIndex + 1;
      let src = "images/image-product-" + imageIndex + ".jpg";
      imageViews.forEach((imageView) => {
        imageView.src = src;
      });
      activeIndex = activeIndex + 1;
      if (activeIndex >= 4) {
        activeIndex = 0;
      }
      images[activeIndex].classList.add("active");
      images[activeIndex + 4].classList.add("active");
    } else if (index == 0) {
      if (imageIndex == 1) {
        imageIndex = 5;
      }
      imageIndex = imageIndex - 1;
      let src = "images/image-product-" + imageIndex + ".jpg";
      imageViews.forEach((imageView) => {
        imageView.src = src;
      });
      activeIndex = activeIndex - 1;
      if (activeIndex < 0) {
        activeIndex = 3;
      }
      images[activeIndex].classList.add("active");
      images[activeIndex + 4].classList.add("active");
    }
  });
});
