document.addEventListener('mousemove', e => {
    const card = e.target.closest('.card');
    if (!card) return;

    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    card.style.setProperty('--mx', (x + 0.5) * 100 + '%');
    card.style.setProperty('--my', (y + 0.5) * 100 + '%');
    card.style.transform =
        'perspective(800px) rotateY(' + (x * 20) + 'deg) rotateX(' + (-y * 20) + 'deg) scale(1.05)';
});

document.addEventListener('mouseout', e => {
    const card = e.target.closest('.card');
    if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
});