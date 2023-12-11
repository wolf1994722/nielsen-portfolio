window.onload = function () {
  Particles.init({
    selector: ".background"
  });
  if($(window).scrollTop() > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
var particles = Particles.init({
  selector: ".background",
  color: ["#faebd7", "white", "burlywood"],
  connectParticles: false,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "white", "burlywood"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

$(window).scroll(function(e){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.home').css('top',-(scrolled*0.0315)+'rem');
    $('.home > .home-content').css('padding-top',(scrolled*0.05)+'rem');
    $('.home > .home-content').css('opacity',1-(scrolled*.00175));
};

// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if($(window).scrollTop() > 20){
    nav.classList.add("sticky");
    // scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    // scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  // body.style.overflowX = "hidden";
  // scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  // body.style.overflowX = "auto";
  // scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

// let navLinks = document.querySelectorAll(".menu li a");
// for (var i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click" , function() {
//     navBar.classList.remove("active");
//     // menuBtn.style.opacity = "1";
//     // menuBtn.style.pointerEvents = "auto";
//   });
// }

// Image Lazy Loading
window.addEventListener("DOMContentLoaded", function() {
  var lazy = document.getElementsByClassName('lazy');
  initializeLoad(lazy);
});

function initializeLoad(imgs) {
  if (imgs.length > 0) {
    if ('IntersectionObserver' in window) {
      lazyLoad(imgs);
    } else {
      loadIntersection(imgs);
    }
  } else {
    return;
  }
}

function lazyLoad(lazy) {
  var options = {
    threshold: 0.8
  }

  var observer = new IntersectionObserver(function(entries, self) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (entry.isIntersecting) {
        var src = entry.target.getAttribute('data-src');
        TweenMax.set(entry.target, {attr:{src:src}});
        TweenMax.fromTo(entry.target, 1, {css:{opacity:0, y:"-50px"}}, {css:{opacity:1, y:0}}, 1.5);
        self.unobserve(entry.target);
      }
    }
  }, options)
  for (var i = 0; i < lazy.length; i++) {
    var lazyItem = lazy[i];
    observer.observe(lazyItem);
  }
}

function loadIntersection(lazy) {
  var io = document.createElement('script');
  io.src = "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver";
  document.head.appendChild(io);
  return io.onload = function() {
    lazyLoad(lazy);
  }
}

