require('dotenv').config();
const URL = 'https://api.spoonacular.com/recipes'
const axios = require('axios')
const { KEY } = process.env

const getRecipeById = async(req,res) => {
    try {
        const { id } = req.params
        const { data } = await axios(`${URL}/${id}/information?apiKey=${KEY}`)
        return res.status(200).json({
            id:data.id,
            name:data.title,
            resume:data.summary,
            healthScore:data.healthScore,
            steps:data.analizedInstructions,
            img:data.image,
            dishTypes:data.dishTypes,
            diets:data.diets
        })
    } catch (error) {
        return res.status(404).send(error.message)
    }
}
module.exports = {
    getRecipeById
}