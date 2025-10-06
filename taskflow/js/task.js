export class Task {
  constructor({ id, title, category = "General", done = false, createdAt = new Date().toISOString() }) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.done = done;
    this.createdAt = createdAt;
  }
  toggleDone() {
    this.done = !this.done;
  }
  toJSON() {
    return { id: this.id, title: this.title, category: this.category, done: this.done, createdAt: this.createdAt };
  }
  static from(obj) {
    return new Task(obj);
  }
}
