(() => {
  const form = document.querySelector('[data-sighting-search]');
  const list = document.getElementById('sighting-list');
  if (!form || !list) return;
  const input = form.querySelector('input');
  const count = document.getElementById('search-count');
  const empty = document.getElementById('no-matches');
  const items = Array.from(list.children, el => ({ el, search: el.dataset.search || '' }));
  let frame = 0;
  const apply = () => {
    frame = 0;
    const query = input.value.trim().toLowerCase();
    let shown = 0;
    for (const item of items) {
      item.el.hidden = !item.search.includes(query);
      if (!item.el.hidden) shown++;
    }
    count.textContent = `${shown} of ${items.length} sightings`;
    empty.hidden = shown !== 0;
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(apply); };
  form.addEventListener('input', schedule);
  form.addEventListener('reset', schedule);
  form.addEventListener('submit', event => event.preventDefault());
  form.hidden = false;
})();
