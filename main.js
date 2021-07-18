const clickable = document.getElementById("shared");
const tooltip1 = document.getElementById("tooltip");
const mobile = document.getElementById("mobile-contain");

clickable.addEventListener("click", () => {
  if (tooltip1.style.display !== "block" && document.body.clientWidth > 768) {
    tooltip1.style.display = "block";
  } else {
    tooltip1.style.display = "none";
  }
  if (mobile.style.display !== "block" && document.body.clientWidth < 768) {
    mobile.style.display = "block";
  } else {
    mobile.style.display = "none";
  }
});
