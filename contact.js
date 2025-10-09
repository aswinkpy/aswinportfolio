document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission

    // Simple success alert
    alert("Message sent successfully! ✅");

    // Optional: reset form
    form.reset();

    // Close modal after sending
    const modal = bootstrap.Modal.getInstance(document.getElementById("contactModal"));
    modal.hide();
  });
});
