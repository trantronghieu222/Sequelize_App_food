import express from 'express'
import { addRate, getRateByRes, getRateByUser } from '../controller/rate_res.controller.js';
const rateResRouter = express.Router();

rateResRouter.get('/restaurant/:resId', getRateByRes);
rateResRouter.get('/user/:userId', getRateByUser);
rateResRouter.post('/createRate', addRate);

export default rateResRouter