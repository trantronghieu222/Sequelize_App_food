import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const model = initModels(sequelize);

const addRate = async (req, res) => {
    try {
        const { userId, resId, Amount } = req.body;
        const rate = await model.rate_res.create({
            user_id: userId,
            res_id: resId,
            amount: Amount,
            date_rate: new Date()
        });
        res.status(201).send(rate);
    } catch (error) {
        res.status(500).send('Lỗi khi thêm đánh giá ', error)
    }
}

const getRateByRes = async (req, res) => {
    try {
        const { resId } = req.params;
        const rateList = await model.rate_res.findAll({
            where: {
                res_id: resId
            }
        })
        res.send(rateList);
    } catch (error) {
        res.status(500).send("lỗi khi lấy danh sách đánh giá ", error);
    }
}

const getRateByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const rateList = await model.rate_res.findAll({
            where: {
                user_id: userId
            }
        })
        res.send(rateList);
    } catch (error) {
        res.status(500).send('Lỗi khi lấy danh sách đánh giá ', error)
    }
}

export {
    getRateByRes,
    getRateByUser,
    addRate
}