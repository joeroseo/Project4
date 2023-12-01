import firebase from "../firebase";

const db = firebase.ref("/project4");

class ProjectDataService {
  getAll() {
    return db;
  }

  create(project) {
    return db.push(project);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new ProjectDataService();
