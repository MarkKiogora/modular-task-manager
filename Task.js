export class Task {
  constructor(title, done = false, id = null) {
    this.id = id || Date.now().toString();
    this.title = title.trim();
    this.done = done;
  }

  toggle() {
    this.done = !this.done;
  }
}
