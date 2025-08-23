
/* ========== NAVIGATION TOGGLE ========== */
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}

/* ========== PORTFOLIO SLIDESHOW ========== */
let slideIndex = 0;
let slideTimer;

function showSlides(n) {
  const slides = document.querySelectorAll(".slideshow img");
  const dots = document.querySelectorAll(".dot");

  if (slides.length === 0) return;

  // Wrap around
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  // Reset states
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  // Activate current slide
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");

  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000); // 5s
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

/* ========== AUTO TESTIMONIALS SLIDESHOW ========== */
let testimonialIndex = 0;

function showTestimonial(index) {
  const testimonials = document.querySelectorAll(".testimonial");
  const total = testimonials.length;

  if (total === 0) return;

  testimonialIndex = index % total;
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === testimonialIndex);
  });
}

// Start auto slideshow on load
document.addEventListener("DOMContentLoaded", () => {
  showTestimonial(testimonialIndex);
  setInterval(() => {
    testimonialIndex++;
    showTestimonial(testimonialIndex);
  }, 5000); // Auto slide every 5 seconds
});

/* ========== AUTO OPEN/CLOSED STATUS ========== */
  function updateOpenStatus() {
    const statusEl = document.getElementById("open-status");
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    // Business Hours: Mon-Fri 7:00–16:30, Closed weekends
    const isOpen = (day >= 1 && day <= 5 && hour >= 7 && hour < 16);

    if (statusEl) {
      statusEl.textContent = isOpen ? "🟢 OPEN NOW" : "🔴 CLOSED";
      statusEl.className = isOpen ? "open" : "closed";
    }
  }

  setInterval(updateOpenStatus, 60000); // refresh every 1 min
  document.addEventListener("DOMContentLoaded", updateOpenStatus);
  
const chatbotHeader = document.getElementById('chatbot-header');

chatbotHeader.addEventListener('click', toggleChatbot);

/* Toggle chatbot open/close */
function toggleChatbot() {
  const body = document.getElementById("chatbot-body");
  const input = document.getElementById("chat-input");
  if (!body) return;

  // If chat is open and input is empty, close it
  if (body.style.display === "flex" && input.value.trim() === "") {
    body.style.display = "none";
  } 
  // Otherwise, toggle normally
  else {
    body.style.display = (body.style.display === "flex") ? "none" : "flex";
  }
}

/* WhatsApp helper */
function openWhatsApp(message) {
  const phone = "27832816599"; // SA number without + or 0
  if (!message) return alert("Please type a message!");
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* Send typed message */
function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;
  
  const chat = document.getElementById("chat-messages");
  chat.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    chat.innerHTML += `<div><strong>Assistant:</strong> Got it! Click below to send to WhatsApp.<br>
      <button onclick="openWhatsApp('${message.replace(/'/g,"\\'")}')" style="background:#25D366;color:white;padding:5px 10px;border:none;border-radius:3px;cursor:pointer;margin-top:5px;">Send to WhatsApp</button>
    </div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 300);
}

/* Predefined option selection */
function selectOption(option) {
  const chat = document.getElementById("chat-messages");
  chat.innerHTML += `<div><strong>You selected:</strong> ${option}</div>`;
  chat.scrollTop = chat.scrollHeight;

  let predefinedMessage = "";
  switch(option) {
    case "Swing Gate":
      predefinedMessage = "Hi! I would like to inquire about a Swing Gate. Could you provide details?";
      break;
    case "Custom Gate":
      predefinedMessage = "Hi! I'm interested in a Custom Gate. Can you guide me on options?";
      break;
    case "Trailer":
      predefinedMessage = "Hi! I would like information about your Trailers.";
      break;
    case "Pedestrian Gate":
      predefinedMessage = "Hi! I'm looking for a Pedestrian Gate. Details please.";
      break;
    case "Other":
      predefinedMessage = ""; // User will type manually
      document.getElementById("chat-input").focus();
      document.getElementById("chat-input").placeholder = "Type your inquiry here...";
      return;
  }

  setTimeout(() => {
    chat.innerHTML += `<div><strong>Assistant:</strong> Great! Click below to send your inquiry to WhatsApp.<br>
      <button onclick="openWhatsApp('${predefinedMessage.replace(/'/g,"\\'")}')" style="background:#25D366;color:white;padding:5px 10px;border:none;border-radius:3px;cursor:pointer;margin-top:5px;">Send to WhatsApp</button>
    </div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 300);
}

function openEmail() {
  try {
    // Try mailto (works if user has email app)
    window.location.href = "mailto:thandasteelwelding@gmail.com?subject=Inquiry from Website";
    
    // If mailto fails, open Gmail
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&to=thandasteelwelding@gmail.com&su=Inquiry%20from%20Website",
        "_blank"
      );
    }, 500);
  } catch (error) {
    // Fallback directly to Gmail
    window.open(
      "https://mail.google.com/mail/?view=cm&to=thandasteelwelding@gmail.com&su=Inquiry%20from%20Website",
      "_blank"
    );
  }
}

  // Add fade-in effect when scrolling
  const fadeElements = document.querySelectorAll('.fade-in');
  function checkVisibility() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
  
  function openEmail() {
  try {
    // Try default email app
    window.location.href = "mailto:thandasteelwelding@gmail.com?subject=Inquiry from Website";

    // Fallback: open Gmail in new tab
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&to=thandasteelwelding@gmail.com&su=Inquiry%20from%20Website",
        "_blank"
      );
    }, 500);
  } catch (error) {
    // Directly open Gmail
    window.open(
      "https://mail.google.com/mail/?view=cm&to=thandasteelwelding@gmail.com&su=Inquiry%20from%20Website",
      "_blank"
    );
  }
}

function sendEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before sending!");
    return;
  }

  // Construct mailto link
  const subject = encodeURIComponent("Inquiry from Website");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // Open default email client
  window.location.href = `mailto:thandasteelwelding@gmail.com?subject=${subject}&body=${body}`;
}