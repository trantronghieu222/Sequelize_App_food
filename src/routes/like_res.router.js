import express from 'express'
import { getLikeByRestaurant, getLikeByUser, likeRestaurant, unlikeRestaurant } from '../controller/like_res.controller.js';
const likeResRouter = express.Router();

likeResRouter.get("/user/:userid", getLikeByUser)
likeResRouter.get("/restaurant/:resid", getLikeByRestaurant)
likeResRouter.post("/like", likeRestaurant)
likeResRouter.post("/unlike", unlikeRestaurant)

export default likeResRouter