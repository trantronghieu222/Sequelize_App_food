import express from 'express'
import userRouter from './user.router.js'
import likeResRouter from './like_res.router.js'
import rateResRouter from './rate_res.router.js'
import orderRouter from './order.router.js'

const rootRouter = express.Router()
rootRouter.use("/user", userRouter)
rootRouter.use("", likeResRouter)
rootRouter.use("/rate", rateResRouter)
rootRouter.use("/order", orderRouter)

export default rootRouter