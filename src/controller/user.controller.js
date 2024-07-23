import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
const model = initModels(sequelize)
const getUser = async (req, res) => {
    let data = await model.user.findAll()
    res.send(data)
}

export { 
    getUser 
} 