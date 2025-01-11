const { data } = require("../database/database");

const USERS_INDEX = 0;

class User {
  constructor() {}

  create({ id, email, name, password, role }) {
    const user = { id, email, name, password, role };

    data[USERS_INDEX].append(user);

    return user;
  }

  findByPk(id) {
    const user = data[USERS_INDEX].find((obj) => obj.id == id);

    return user;
  }

  findByEmail(email) {
    const user = data[USERS_INDEX].find((obj) => obj.email == email);
    
    return user;
  }

  findOne({ where: {  email, password} }) {
    const user = data[USERS_INDEX].find((obj) => obj.email == email && obj.password == password);

    return user;
  }
}
