function hello() {
  if (document.getElementById("uls").style.display === "none") {
    document.getElementById("uls").style.display = "block";
    window.addEventListener("click", function (e) {
      if (document.getElementById("uls").contains(e.target)) {
        document.getElementById("uls").style.display = "none";
      }
    });
  } else {
    document.getElementById("uls").style.display = "none";
  }
}
