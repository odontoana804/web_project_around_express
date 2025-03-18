const usersRouter = require("express").Router();
const { getUsers } = require("../data/db");

usersRouter.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: "Error al leer datos de usuarios" });
  }
});

usersRouter.get("/users/:id", async (req, res) => {
  const users = await getUsers();
  const { id } = req.params;

  if (!users[id]) {
    res.send({ message: "ID de usuario no encontrado" });
    return;
  }
  res.send(users[id]);
});

module.exports = usersRouter;
