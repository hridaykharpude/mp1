var navbar1 = document.getElementById("navbar");
var navthings = document.querySelectorAll(".navthing");
var allsections = document.querySelectorAll("section");
var pics = document.querySelectorAll(".onepic");
var picnum = 0;
var popup1 = document.getElementById("popup1");


window.addEventListener("scroll", function () {
  var whereami = "";
  
  if (window.scrollY > 50) {
    navbar1.classList.add("small");
  } else {
    navbar1.classList.remove("small");
  }

  allsections.forEach(function (sec) {
    var sectop = sec.offsetTop;
    if (window.scrollY >= sectop - 100) {
      whereami = sec.getAttribute("id");
    }
  });

  navthings.forEach(function (thing) {
    thing.classList.remove("active");
    if (thing.getAttribute("href") === "#" + whereami) {
      thing.classList.add("active");
    }
  });
});

function showpic(n) {
  pics.forEach(function (p) {
    p.classList.remove("pic-on");
  });
  pics[n].classList.add("pic-on");
}

document.getElementById("rightbtn").addEventListener("click", function () {
  picnum = (picnum + 1) % pics.length;
  showpic(picnum);
});

document.getElementById("leftbtn").addEventListener("click", function () {
  picnum = (picnum - 1 + pics.length) % pics.length;
  showpic(picnum);
});

document.getElementById("popupbtn").addEventListener("click", function () {
  popup1.classList.add("showpopup");
});
document.getElementById("xbtn").addEventListener("click", function () {
  popup1.classList.remove("showpopup");
});