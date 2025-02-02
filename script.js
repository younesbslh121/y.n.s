const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const loveLetter = document.getElementById('loveLetter');

// Faire bouger le bouton "Non" aléatoirement
noButton.addEventListener('mouseover', () => {
  noButton.classList.add('move');
  setTimeout(() => {
    noButton.classList.remove('move');
  }, 1000);
});

// Afficher le message et la lettre d'amour si "Oui" est cliqué
yesButton.addEventListener('click', () => {
  message.style.display = 'block';
  document.querySelector('.buttons').style.display = 'none';
  loveLetter.style.display = 'block';
});

// Fermer la lettre d'amour
function closeLetter() {
  loveLetter.style.display = 'none';
}
