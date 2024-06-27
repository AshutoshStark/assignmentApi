const express = require("express");
const routes = express.Router();

const fileUpload = require("./routes/fileUploadRoute")
const teacherView = require("./routes/teacherViewsRoute")

routes.use('/file',fileUpload)
routes.use('/teacher',teacherView)

module.exports = routes;