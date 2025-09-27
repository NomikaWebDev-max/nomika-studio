const header = document.getElementById('site-header');
const btnLocal = document.getElementById('btn-local');
const btnInt = document.getElementById('btn-int');
const toggleSection = document.getElementById('toggle-section');
const productContainer = document.getElementById('product-container');
const loading = document.getElementById('loading');

const prices = document.querySelectorAll('.price');
const localButtons = document.querySelectorAll('.buy-local');
const intButtons = document.querySelectorAll('.buy-int');

function showLocal(save = true) {
  prices.forEach(p => p.textContent = p.dataset.local);
  localButtons.forEach(btn => btn.classList.remove('hidden'));
  intButtons.forEach(btn => btn.classList.add('hidden'));
  btnLocal.classList.add('active');
  btnInt.classList.remove('active');
  if (save) localStorage.setItem("currency", "local");
}

function showInt(save = true) {
  prices.forEach(p => p.textContent = p.dataset.int);
  localButtons.forEach(btn => btn.classList.add('hidden'));
  intButtons.forEach(btn => btn.classList.remove('hidden'));
  btnInt.classList.add('active');
  btnLocal.classList.remove('active');
  if (save) localStorage.setItem("currency", "int");
}

function showContent() {
  loading.classList.add("hidden");
  productContainer.classList.remove("hidden");
  toggleSection.classList.remove("hidden");
}

// Button click listeners
btnLocal.addEventListener('click', () => showLocal(true));
btnInt.addEventListener('click', () => showInt(true));

const savedCurrency = localStorage.getItem("currency");
if (savedCurrency) {
  showContent();
  if (savedCurrency === "local") showLocal(false);
  else showInt(false);
} else {
  // Timeout fallback after 3s
  const timeout = setTimeout(() => {
    showContent();
    showInt(); // fallback to International
  }, 3000);

  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      clearTimeout(timeout);
      showContent();
      if (data.country_code === "MY") showLocal();
      else showInt();
    })
    .catch(() => {
      clearTimeout(timeout);
      showContent();
      showInt();
    });
}

// Shrink header on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("shrink");
  else header.classList.remove("shrink");
});
