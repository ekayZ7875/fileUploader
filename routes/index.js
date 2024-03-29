const { Router } = require('express')
const uploadFile = require('../controllers/index.js')



const router = Router()

router.route('/upload-file').post(uploadFile)

module.exports = router
