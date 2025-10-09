// Animate vertical skill bars
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".fill");

  bars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    const numeric = parseInt(percent);
    setTimeout(() => {
      bar.style.height = percent;
      bar.parentElement.querySelector("span").textContent = percent;
    }, 300);
  });
});
