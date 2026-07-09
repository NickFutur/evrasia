document.addEventListener('DOMContentLoaded', function() {
  const hintElements = document.querySelectorAll('.product-card__hint');

  hintElements.forEach(function(hint) {
    const hiddenText = hint.nextElementSibling;

    if (!hiddenText || !hiddenText.classList.contains('product-card__hint-hidden-text')) {
      return;
    }

    hint.addEventListener('mouseenter', function() {
      hiddenText.classList.add('product-card__hint-hidden-text--visible');
    });

    hint.addEventListener('mouseleave', function() {
      hiddenText.classList.remove('product-card__hint-hidden-text--visible');
    });
  });
});
