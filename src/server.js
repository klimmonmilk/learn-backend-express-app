import { app } from "./app.js";
import { deleteUsers, getUsers, postUsers, testAPI } from "./modules/users/users.controller.js";

const PORT = 3000;

app.get('/', testAPI);

app.get("/users", getUsers);

app.post("/users", postUsers);

app.delete("/users/:id", deleteUsers);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});