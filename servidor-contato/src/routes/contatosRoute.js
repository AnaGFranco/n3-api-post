const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.post("/buscar/criar", bodyParser.json(),controller.compararAdd)
router.get("/", controller.getAll)
router.post("/criar", bodyParser.json(),controller.add)



module.exports = router
