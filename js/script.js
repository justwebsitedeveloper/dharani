// Nav active
window.onload = function () {
  const navList = document.querySelector("#nav");
  const canvasEle = document.querySelector("#offcanvasNavbar");
  navList.addEventListener("click", () =>
    setTimeout(function () {
      const hash = window.location.hash.substr(1);
      if (hash) {
        navList.querySelector(".active").classList.remove("active");
        navList.querySelector(`#nav-${hash}`).classList.add("active");
      }
    })
  );
  const bsOffcanvas = new bootstrap.Offcanvas(canvasEle);
  canvasEle.addEventListener('click', (evnt) => {
    setTimeout(() => {bsOffcanvas.hide()}, 700);
  })
};


// Scroll active
const navLi = document.querySelectorAll("#nav li");
const contactLink = document.querySelector("#nav-contact");
const anchorEle = [];
let scrollCheck = true;

navLi.forEach((ele) => {
  anchorEle.push(document.querySelector(`#${ele.id.split("-")[1]}`));
})

anchorEle.pop();

console.log(anchorEle);
window.onscroll = () => {
  var current = "";

  anchorEle.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollCheck) {
    if (pageYOffset >= sectionTop - 90 || pageYOffset >= sectionTop) {
      current = `nav-${section.getAttribute("id")}`; }
    }
    else {
      current = "nav-contact";
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.id === current) {
      console.log(li);
      li.classList.add("active");
    }
  });
};

contactLink.addEventListener('click', () => {
  scrollCheck = false;
  contactLink.classList.add("active");
  setTimeout(() => {
    scrollCheck=true;
  }, 1000);
})




    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".mySwiperthree", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    