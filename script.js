// ================= PAGE LOAD =================
window.addEventListener("load", () => {
  document.body.classList.add("show");
  initTyping();
});

// ================= TYPING EFFECT =================
function initTyping() {
  const el = document.querySelector(".typing");
  if (!el) return;

  const text = "Student of SMKN 1 NGLEGOK";
  let index = 0;

  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index++);
      setTimeout(type, 80);
    }
  }

  type();
}

// ================= MODAL CERTIFICATE =================
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

if (modal && modalImg) {
  document.querySelectorAll(".cert-img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// ================= SCROLL BOUNCE =================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);