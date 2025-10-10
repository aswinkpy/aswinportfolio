
document.addEventListener("DOMContentLoaded", function () {
  const roles = ["WEB DEVELOPER", "PHP DEVELOPER", "WEB DESIGNER"];
  const typingElement = document.getElementById("typing-text");

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const erasingSpeed = 60;
  const delayBetween = 1200;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
      typingElement.textContent += currentRole.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, erasingSpeed);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetween);
      } else {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
