import { escapeHTML } from './utils.js';

export const view = {
  render(tasks, filter = 'all') {
    const list = document.getElementById('task-list');
    list.innerHTML = '';

    let filtered = tasks;
    if (filter === 'done') filtered = tasks.filter(t => t.done);
    else if (filter === 'pending') filtered = tasks.filter(t => !t.done);

    filtered.forEach(task => {
      const li = document.createElement('li');
      li.dataset.id = task.id;
      li.className = task.done ? 'done' : '';
      li.innerHTML = `
        <span>${escapeHTML(task.title)}</span>
        <div>
          <button class="toggle">${task.done ? 'Undo' : 'Done'}</button>
          <button class="delete">X</button>
        </div>
      `;
      list.appendChild(li);
    });

    document.getElementById('task-count').textContent =
      `Total: ${tasks.length} | Done: ${tasks.filter(t => t.done).length}`;
  }
};
