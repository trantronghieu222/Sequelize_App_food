import express from 'express'
import rootRouter from './routes/rootRouter.js';
// yarn add cors
import cors from 'cors'
const app = express();
app.use(express.json())
app.use(cors()) //  cho phép tất cả domain truy cập
// localhost:8080
// hàm khởi tạo server với port tự định nghĩa
app.use(rootRouter)
app.listen(8080)