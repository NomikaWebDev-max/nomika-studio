(function () {
  var year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  var details = document.querySelectorAll('.faq-list details');
  details.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      details.forEach(function (other) {
        if (other !== item) other.removeAttribute('open');
      });
    });
  });
})();
