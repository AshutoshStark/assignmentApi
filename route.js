const express = require("express");
const routes = express.Router();

const fileUpload = require("./routes/fileUploadRoute")
const teacherView = require("./routes/teacherViewsRoute")
const Users = require("./routes/UserRoutes")

routes.use('/file',fileUpload)
routes.use('/teacher',teacherView)
routes.use('/user',Users)

module.exports = routes;