const usersRouter = require("express").Router();
const { getUsers } = require("../controllers/users");

usersRouter.get("/users", getUsers);

/* usersRouter.get("/users/:id", async (req, res) => {
  const users = await getUsers();
  const { id } = req.params;
  const selectedUser = users.find((user) => user._id === id);

  if (!selectedUser) {
    res.status(404).send({ message: "ID de usuario no encontrado" });
    return;
  }
  res.send(selectedUser);
}); */

module.exports = usersRouter;
