const express = require("express");
const routes = express.Router();

const fileUpload = require("./routes/fileUploadRoute")
const teacherView = require("./routes/teacherViewsRoute")
const Users = require("./routes/UserRoutes")
const fastService = require("./services/pythonApi")
const similarity = require("./routes/similarity")

routes.use('/file',fileUpload)
routes.use('/teacher',teacherView)
routes.use('/user',Users)
routes.use('/service',fastService)
routes.use('/similarity',similarity)

module.exports = routes;