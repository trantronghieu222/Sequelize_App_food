import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const model = initModels(sequelize)

const createOrder = async (req, res) => {
    try {
        const { userId, foodId, Amount } = req.body;
        const order = await model.order.create({
            user_id: userId,
            food_id: foodId,
            amount: Amount
        });
        res.status(201).send(order);
    } catch (error) {
        res.status(500).send("Lỗi khi tạo đơn hàng ", error)
    }
}

export {
    createOrder
}