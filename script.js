(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  function current() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Hide any photo whose file has not been uploaded yet (no broken-image icons)
  document.querySelectorAll("figure.photo img").forEach(function (img) {
    function drop() {
      var fig = img.closest("figure");
      if (!fig) return;
      var parent = fig.parentNode;
      fig.remove();
      if (parent.classList.contains("gallery") && !parent.querySelector("figure")) parent.remove();
    }
    if (img.complete && img.naturalWidth === 0 && !img.hasAttribute("loading")) drop();
    else img.addEventListener("error", drop);
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
