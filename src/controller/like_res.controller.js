import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const model = initModels(sequelize)

const likeRestaurant = async (req, res) => {
    try {
        const { userId, resId } = req.body;
        const like = await model.like_res.create({
            user_id: userId,
            res_id: resId,
            date_like: new Date()
        });
        res.status(201).send(like);
    } catch (error) {
        res.status(500).send("Lỗi khi like nhà hàng: ", error.message);
    }
}

const unlikeRestaurant = async (req, res) => {
    try {
        const { userid, resid } = req.body;
        const unLike = await model.like_res.destroy({
            where: {
                user_id: userid,
                res_id: resid
            }
        });
        if (unLike) {
            res.status(200).send("unLike hoàn tất");
        }
        else {
            res.status(404).send("Không tồn tại lượt like");
        }
    } catch (error) {
        res.status(500).send("Lỗi khi unlike nhà hàng: " + error.message);
    }
}

const getLikeByUser = async (req, res) => {
    try {
        const { userid } = req.params;
        const likes = await model.like_res.findAll({
            where: {
                user_id: userid
            },
        })
        res.send(likes);
    } catch (error) {
        res.status(500).send("Lỗi khi tìm lượt thích" + error.message);
    }
}

const getLikeByRestaurant = async (req, res) => {
    try {
        const { resid } = req.params;
        const likes = await model.like_res.findAll({
            where: {
                res_id: resid
            }
        })
        res.send(likes);
    } catch (error) {
        res.status(500).send('Lỗi khi tìm lượt thích' + error.message);
    }
}

export {
    getLikeByUser,
    getLikeByRestaurant,
    likeRestaurant,
    unlikeRestaurant
}