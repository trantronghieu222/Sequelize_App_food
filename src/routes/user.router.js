import express from 'express'
import { getUser } from '../controller/user.controller.js';
const userRouter = express.Router();

userRouter.get("/get-user", getUser)

export default userRouter