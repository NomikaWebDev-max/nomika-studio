const header = document.getElementById('site-header');
const btnLocal = document.getElementById('btn-local');
const btnInt = document.getElementById('btn-int');
const toggleSection = document.getElementById('toggle-section');
const productContainer = document.getElementById('product-container');
const loading = document.getElementById('loading');

const prices = document.querySelectorAll('.price');
const localButtons = document.querySelectorAll('.buy-local');
const intButtons = document.querySelectorAll('.buy-int');
const productCards = document.querySelectorAll('.product-card');

// Show prices and buttons in local currency
function showLocal(save = true) {
  prices.forEach(p => p.textContent = p.dataset.local);
  localButtons.forEach(btn => btn.classList.remove('hidden'));
  intButtons.forEach(btn => btn.classList.add('hidden'));
  btnLocal.classList.add('active');
  btnInt.classList.remove('active');
  if (save) localStorage.setItem("currency", "local");
}

// Show prices and buttons in international currency
function showInt(save = true) {
  prices.forEach(p => p.textContent = p.dataset.int);
  localButtons.forEach(btn => btn.classList.add('hidden'));
  intButtons.forEach(btn => btn.classList.remove('hidden'));
  btnInt.classList.add('active');
  btnLocal.classList.remove('active');
  if (save) localStorage.setItem("currency", "int");
}

// Show product content with animations
function showContent() {
  loading.classList.add("hidden");
  productContainer.classList.remove("hidden");
  toggleSection.classList.remove("hidden");

  // Animate product cards with stagger
  productCards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.2}s`;
  });
}

// Button click listeners
btnLocal.addEventListener('click', () => showLocal(true));
btnInt.addEventListener('click', () => showInt(true));

// Detect currency from local storage or IP
const savedCurrency = localStorage.getItem("currency");
if (savedCurrency) {
  showContent();
  if (savedCurrency === "local") showLocal(false);
  else showInt(false);
} else {
  const timeout = setTimeout(() => { showContent(); showInt(); }, 3000);
  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      clearTimeout(timeout);
      showContent();
      if (data.country_code === "MY") showLocal();
      else showInt();
    })
    .catch(() => { clearTimeout(timeout); showContent(); showInt(); });
}

// Shrink header on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("shrink");
  else header.classList.remove("shrink");
});
