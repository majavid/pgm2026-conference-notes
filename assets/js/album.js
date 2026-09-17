/* Photo album carousel for PGM 2026 conference diary.
 *
 * Each page contains:
 *   <div class="photo-album"
 *        data-folder="https://drive.google.com/drive/folders/FOLDER_ID"
 *        data-photos='["FILE_ID_1", "FILE_ID_2", ...]'></div>
 *
 * The photos are shown one at a time with Previous / Next buttons.
 * Images are served from Google Drive via lh3.googleusercontent.com,
 * which works for any file shared as "Anyone with the link – Viewer".
 */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.photo-album').forEach(setupAlbum);
});

function setupAlbum(container) {
  var ids = [];
  try {
    ids = JSON.parse(container.getAttribute('data-photos') || '[]');
  } catch (e) {
    ids = [];
  }
  var folder = container.getAttribute('data-folder');

  if (!ids.length) {
    container.innerHTML =
      '<p class="album-empty">Photo album coming soon.' +
      (folder
        ? ' <a href="' + folder + '" target="_blank" rel="noopener">Open the album on Google Drive →</a>'
        : '') +
      '</p>';
    return;
  }

  container.innerHTML =
    '<div class="album-frame">' +
    '  <img class="album-img" alt="Conference photo">' +
    '</div>' +
    '<div class="album-controls">' +
    '  <button type="button" class="album-btn album-prev" aria-label="Previous photo">&#8249; Previous</button>' +
    '  <span class="album-counter" aria-live="polite"></span>' +
    '  <button type="button" class="album-btn album-next" aria-label="Next photo">Next &#8250;</button>' +
    '</div>';

  var img = container.querySelector('.album-img');
  var counter = container.querySelector('.album-counter');
  var prevBtn = container.querySelector('.album-prev');
  var nextBtn = container.querySelector('.album-next');
  var index = 0;

  function srcFor(i) {
    return 'https://lh3.googleusercontent.com/d/' + ids[i] + '=w1400';
  }

  function preload(i) {
    var wrapped = ((i % ids.length) + ids.length) % ids.length;
    var im = new Image();
    im.src = srcFor(wrapped);
  }

  function show(i) {
    index = ((i % ids.length) + ids.length) % ids.length;
    img.src = srcFor(index);
    counter.textContent = (index + 1) + ' / ' + ids.length;
    preload(index + 1);
    preload(index - 1);
  }

  prevBtn.addEventListener('click', function () { show(index - 1); });
  nextBtn.addEventListener('click', function () { show(index + 1); });

  // Left/right arrow keys also navigate (when this album is on screen).
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  show(0);
}
