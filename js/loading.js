document.addEventListener('DOMContentLoaded', () => {
  const loadingLogo = document.getElementById('loadingLogo');
  const homeLogo = document.getElementById('homeLogo');
  if (loadingLogo) loadingLogo.src = CONFIG.logoUrl;
  if (homeLogo) homeLogo.src = CONFIG.logoUrl;

  const fill = document.getElementById('progressFill');
  const text = document.getElementById('progressText');
  if (!fill || !text) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 4) + 1;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => showLayer('homeLayer'), 400);
    }
    fill.style.width = progress + '%';
    text.textContent = progress + '%';
  }, 45);
});

function showLayer(id) {
  document.querySelectorAll('.layer').forEach(l => l.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo(0, 0);
}