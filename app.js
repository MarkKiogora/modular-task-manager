import { Task } from './Task.js';
import { store } from './store.js';
import { view } from './view.js';

let tasks = store.load();
let currentFilter = 'all';

const input = document.getElementById('new-task');
const addBtn = document.getElementById('add-btn');
const filters = document.querySelectorAll('.filters button');
const list = document.getElementById('task-list');

// Initial render
view.render(tasks);

// Add new task
addBtn.addEventListener('click', () => {
  const title = input.value.trim();
  if (!title) return;
  tasks.push(new Task(title));
  store.save(tasks);
  input.value = '';
  view.render(tasks, currentFilter);
});

// Handle delete
list.addEventListener('click', e => {
  const id = e.target.closest('li')?.dataset.id;
  if (!id) return;

  if (e.target.classList.contains('delete')) {
    tasks = tasks.filter(t => t.id !== id);
  } else if (e.target.classList.contains('toggle')) {
    const task = tasks.find(t => t.id === id);
    task.toggle();
  }

  store.save(tasks);
  view.render(tasks, currentFilter);
});

// Filters
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    view.render(tasks, currentFilter);
  });
});

