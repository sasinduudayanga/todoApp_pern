const createTodo = "INSERT INTO todo (description) VALUES($1) RETURNING *";

module.exports = {
  createTodo,
};
