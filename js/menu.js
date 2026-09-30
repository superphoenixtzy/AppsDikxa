// Isi link dari CONFIG
document.getElementById('btnTermux').href = CONFIG.termuxLink;
document.getElementById('btnSupport').href = CONFIG.supportLink;
document.getElementById('btnTiktok').href = CONFIG.tiktok;
document.getElementById('btnWa').href = CONFIG.whatsapp;
document.getElementById('btnTele').href = CONFIG.telegram;
document.getElementById('btnYt').href = CONFIG.youtube;

// Info + Contact Dev (kanan atas)
document.getElementById('btnInfo').onclick = () => showLayer('infoLayer');
document.getElementById('btnContactDev').onclick = () => showLayer('contactLayer');

// Contact dev layer
document.getElementById('devNameInfo').textContent = CONFIG.devName;
document.getElementById('contactWaLink').href = CONFIG.contactWa;
document.getElementById('contactTeleLink').href = CONFIG.contactTele;

// ============ POPUP HAMBURGER ============
const overlay = document.getElementById('popupOverlay');
document.getElementById('btnHamburger').onclick = () => {
  overlay.classList.remove('hidden');
};
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.classList.add('hidden');
});
document.querySelectorAll('.popup-item[data-target]').forEach(btn => {
  btn.onclick = () => {
    overlay.classList.add('hidden');
    showLayer(btn.dataset.target);
  };
});

// ============ RENDER COMMAND LIST ============
function renderCopyList(containerId, items) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = '';
  items.forEach((it, i) => {
    const div = document.createElement('div');
    div.className = 'copy-item';
    div.innerHTML = `
      <div>
        <span class="lbl">${i + 1}. ${it.label}</span>
        <span class="cmd">${it.cmd}</span>
      </div>
      <button class="copy-btn" data-cmd="${it.cmd}">Copy</button>
    `;
    box.appendChild(div);
  });
}

renderCopyList('commandsList', CONFIG.commands);
renderCopyList('runningList', CONFIG.running);
renderCopyList('statusList', CONFIG.status);

// Toggle panel
document.getElementById('btnShowCommands').onclick = () => {
  document.getElementById('commandsPanel').classList.toggle('hidden');
};
document.getElementById('btnStartRunning').onclick = () => {
  document.getElementById('runningPanel').classList.toggle('hidden');
};
document.getElementById('btnGetStatus').onclick = () => {
  document.getElementById('statusPanel').classList.toggle('hidden');
};