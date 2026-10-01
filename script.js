// Progressive enhancement: navigation and case studies still work without JavaScript.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const narrowScreen = window.matchMedia('(max-width: 760px)');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.dataset.collapsed = String(narrowScreen.matches);
  menuButton.textContent = 'Menu';
}
menuButton.hidden = false;
closeMenu();
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.dataset.collapsed = String(expanded);
  menuButton.textContent = expanded ? 'Menu' : 'Close';
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
narrowScreen.addEventListener('change', closeMenu);
// Experience links open their matching case study before native anchor navigation.
document.querySelectorAll('[data-case-link]').forEach(link => {
  link.addEventListener('click', () => {
    const card = document.querySelector(link.getAttribute('href'));
    if (card) card.querySelector('details').open = true;
  });
});
