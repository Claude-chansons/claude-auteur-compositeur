const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const playerHTML = (song, i) => `<article class="track-card"><div class="track-top"><div><span class="track-number">${String(i+1).padStart(2,'0')}</span><h3>${esc(song.title)}</h3></div><button class="play" aria-label="Lire ${esc(song.title)}">▶</button></div><p>${esc(song.description)}</p><audio controls preload="none" src="${esc(song.file)}"></audio></article>`;
function renderGenre(category, targetId='tracks') {
  const el = document.getElementById(targetId); if (!el) return;
  const songs = catalog.filter(s=>s.category===category && s.featured);
  el.innerHTML = songs.map(playerHTML).join('');
  bindPlayers(el);
}
function bindPlayers(root) {
  root.querySelectorAll('audio').forEach(audio => audio.addEventListener('play', () => {
    root.querySelectorAll('audio').forEach(other => { if(other!==audio) other.pause(); });
  }));
  root.querySelectorAll('.play').forEach(btn => btn.addEventListener('click', () => {
    const audio = btn.closest('.track-card').querySelector('audio');
    if(audio.paused) audio.play().catch(()=>{}); else audio.pause();
  }));
}
function renderMore(category, targetId='more') {
  const el=document.getElementById(targetId); if(!el) return;
  const songs=catalog.filter(s=>s.category===category && !s.featured);
  el.innerHTML=songs.length ? songs.map(playerHTML).join('') : '<p class="muted">Aucun titre complémentaire dans cette catégorie pour le moment.</p>';
  bindPlayers(el);
}
