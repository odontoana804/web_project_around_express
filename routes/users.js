const usersRouter = require("express").Router();
const { getUsers, getUserById, createUser, setUserInfo } = require("../controllers/users");

usersRouter.get("/users", getUsers);

usersRouter.get("/users/:id", getUserById);

usersRouter.post("/users", createUser)

usersRouter.patch("/users/me", setUserInfo);


module.exports = usersRouter;
