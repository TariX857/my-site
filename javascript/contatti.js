document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Qui puoi inserire la logica per gestire l'invio del messaggio di contatto
      alert("Messaggio inviato!");
      contactForm.reset();
    });
  });
  