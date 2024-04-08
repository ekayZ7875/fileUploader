const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary')
const upload = multer({ dest: 'uploads/' });
require('dotenv').config()
   


const port = process.env.PORT
const app = express()

app.use(express.json())

cloudinary.config({
    cloud_name:'dhy548whh',
    api_key:'473169777977676',
    api_secret:'jwW2aWDFQn0PwQ27uTXDiMOQ3bk'
})



app.post('/upload',upload.single('file') ,async(res,req) => {
    try{
        const{Name,Size } = req.file

        // uploading file to cloudinary

        const result = await cloudinary.uploader.upload(req.file.path)
        console.log(results)
        res.send({
            status:0,
            message:'file uploaded to cloudinary successfully'
        })

        const insertion = await db('files_1').insert({
            Name,
            Size,
            created_at: new Date()
        }).returning('id')

        if(insertion){
            res.send({
                status:0,
                message:'Files Uploaded Successfully'
            })
        }  
    } catch(error){
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
       
    }
})


app.listen(port,()=>{
    console.log('App is listening on port',port)
})