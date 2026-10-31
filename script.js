const invitation = document.getElementById('invitation');
const cover = document.getElementById('cover');
const inside = document.getElementById('inside');
const confetti = document.getElementById('confetti');

const confettiColors = ['#e6b84f', '#b32f43', '#e78434', '#f4d98e', '#258b76', '#d95768'];
for (let i = 0; i < 72; i += 1) {
  const piece = document.createElement('i');
  piece.className = `confetti-piece confetti-${i % 4}`;
  piece.style.setProperty('--x', `${Math.random() * 100}vw`);
  piece.style.setProperty('--drift', `${Math.random() * 260 - 130}px`);
  piece.style.setProperty('--spin', `${Math.random() * 900 - 450}deg`);
  piece.style.setProperty('--fall', `${2.1 + Math.random() * 1.7}s`);
  piece.style.setProperty('--delay', `${Math.random() * 0.7}s`);
  piece.style.setProperty('--confetti-color', confettiColors[i % confettiColors.length]);
  confetti.append(piece);
}

function setOpen(open) {
  invitation.classList.toggle('is-open', open);
  inside.setAttribute('aria-hidden', String(!open));
  cover.setAttribute('aria-hidden', String(open));
  if (open) {
    confetti.classList.remove('burst');
    void confetti.offsetWidth;
    confetti.classList.add('burst');
  } else {
    confetti.classList.remove('burst');
  }
}

cover.addEventListener('click', () => setOpen(true));
cover.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    setOpen(true);
  }
});
document.getElementById('replay').addEventListener('click', () => {
  setOpen(false);
  window.setTimeout(() => setOpen(true), 10000);
});

// Let the names settle on the cover, then unfold the invitation automatically.
window.setTimeout(() => setOpen(true), 10000);
