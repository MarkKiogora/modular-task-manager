const STORAGE_KEY = 'tasks';

export const store = {
  save(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },

  load() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
};
