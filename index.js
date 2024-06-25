const express = require('express')
const port = 6353

const app = express()
const path = require('path')
app.set('view engine', 'ejs');  
app.use("/" , express.static(path.join(__dirname,"/public")))
const middleware = (req,res,next) => {
    if(req.query.age >= 18){
        return next()
    }
    return res.redirect('/')
}

app.get('/',(req,res)=>{
    return res.render('home')
})

app.get('/about',middleware,(req,res)=>{
    return res.render('about')
})

app.get('/contact',middleware,(req,res)=>{
    return res.render('contact')
})

app.use(middleware)
app.listen(port,(err)=>{
    if(err){
        console.log("Server not started")
    }else{
        console.log("Server started at port : " + port)
    }
})