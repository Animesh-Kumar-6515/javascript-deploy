const express = require('express')
const app = express()
// const port = 3000

require('dotenv').config()

// console.log(process.env.port);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/animesh',(req,res)=>{
    res.send("Hi this is animesh")
})
app.get('/tron',(req,res)=>{
  res.send("hi this tron from the server side")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})