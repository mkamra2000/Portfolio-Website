function hgClick() {
  if (document.getElementById("uls").style.display === "none") {
    document.getElementById("uls").style.display = "block";
    document.addEventListener("click", function (e) {
      if (document.getElementById("uls").contains(e.target)) {
        document.getElementById("uls").style.display = "none";
      }
      if(document.getElementById("contactForm") && document.getElementById("contactForm").contains(e.target)){
        document.getElementById("uls").style.display = "none";
      }
      if(document.getElementById("thanks") && document.getElementById("thanks").contains(e.target)){
        document.getElementById("uls").style.display = "none";
      }
      if(document.getElementById("mainContainer") && document.getElementById("mainContainer").contains(e.target)){
        document.getElementById("uls").style.display = "none";
      }
    });
  } else {
    document.getElementById("uls").style.display = "none";
  }
}

function load(){
  let loader = document.getElementById("loading");
  loader.style.display = 'none';
}