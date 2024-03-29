const express = require('express')
const router = require('./routes/index.js')




const port = 5000
const app = express()

app.use(express.json())
app.use(router)


app.listen(port,()=>{
    console.log('App is listening on port',port)
})