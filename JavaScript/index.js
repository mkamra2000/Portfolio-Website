let interval;
if(location.href=='http://127.0.0.1:5500/'){
  interval = setInterval(checkViewport,400);
}
function hgClick() {
  if (document.getElementById("uls").style.display === "none") {
    document.getElementById("uls").style.display = "block";
    document.addEventListener("click", function (e) {
      if (document.getElementById("uls").contains(e.target)) {
        document.getElementById("uls").style.display = "none";
      }
      if (
        document.getElementById("contactForm") &&
        document.getElementById("contactForm").contains(e.target)
      ) {
        document.getElementById("uls").style.display = "none";
      }
      if (
        document.getElementById("thanks") &&
        document.getElementById("thanks").contains(e.target)
      ) {
        document.getElementById("uls").style.display = "none";
      }
      if (
        document.getElementById("mainContainer") &&
        document.getElementById("mainContainer").contains(e.target)
      ) {
        document.getElementById("uls").style.display = "none";
      }
    });
  } else {
    document.getElementById("uls").style.display = "none";
  }
}

function load() {
  let loader = document.getElementById("loading");
  loader.style.display = "none";
}

function checkViewport() {
  var myElement = document.getElementById("skills");
  var progress1 = document.getElementById("progress1");
  var progress2 = document.getElementById("progress2");
  var bounding = myElement.getBoundingClientRect();

  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= window.innerWidth &&
    bounding.bottom <= window.innerHeight
  ) {
    progress1.style.animation = 'progress1 1.5s ease-in-out';
    progress2.style.animation = 'progress2 1.5s ease-in-out';
    clearInterval(interval);
  }
}