const multer = require('multer')
const upload = multer({dest:'uploads/'})
const db = require('../db/db.js')


   const uploadFile = async(res,req) => {
        try{
            const{ orginalname,filename,size } = req.file

            const insertion = await db('files').insert({
                originalname,
                filename,
                size,
                created_at:new Date()
            }).returning('id')

            if(insertion){
                res.send({
                    status:0,
                    message:'Files Uploaded Successfully'
                })
            }  
        } catch(error){
            console.error(error)
            res.send({
                status:0,
                message:'Some internal error occurred'
            })
        }
    }

module.exports = {
    uploadFile
    };

