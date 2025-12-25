import { Router } from "express";
import { deleteUsers, getUsers, postUsers, testAPI } from "../../modules/users/users.controller";

export const router = Router()

router.get('/', testAPI);

router.get("/users", getUsers);

router.post("/users", postUsers);

router.delete("/users/:id", deleteUsers);