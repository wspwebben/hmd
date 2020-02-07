const blockClass = 'js-load-more';
const blocks = document.querySelectorAll(`.${blockClass}`);

const base = '/wp-admin/admin-ajax.php';
const action = 'load_projects';


blocks.forEach(block => {
  const list = block.querySelector(`.${blockClass}__list`);
  let button = block.querySelector(`.${blockClass}__button`);

  if (!list || !button) return;

  const max = Number(button.dataset.max) || 1;
  let page = Number(button.dataset.page) || 1;

  const removeButton = () => {
    if (button) {
      button.parentNode.removeChild(button);
    } 
    button = null;
  }

  if (page >= max) {
    removeButton();
    return;
  }

  button.addEventListener('click', (e) => {
    e.preventDefault();
    page += 1;

    fetch(`${base}?action=${action}&page=${page}`)
      .then(res => res.json())
      .then(res => {
        if (!res.success) {
          throw new Error(res.data);
        }

        list.insertAdjacentHTML('beforeend', res.data);
        history.pushState('', '', page);
      })
      .catch(removeButton)

    if (page >= max) {
      removeButton();
    }
  });
})