export default class Employee {
  constructor(index, name, phone, title) {
    this.index = index;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }

  updateName(name) {
    this.name = name;
  }

  updatePhone(phone) {
    this.phone = phone;
  }

  updateTitle(title) {
    this.title = title;
  }
}
