document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('copy-btn')) return;
  const cmd = e.target.dataset.cmd;
  navigator.clipboard.writeText(cmd).then(() => {
    const original = e.target.textContent;
    e.target.textContent = '✔ Copied';
    e.target.style.background = 'linear-gradient(135deg,#22c55e,#86efac)';
    setTimeout(() => {
      e.target.textContent = original;
      e.target.style.background = '';
    }, 1200);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = cmd; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
    alert('Copied: ' + cmd);
  });
});