const express=require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')
const Blog=require('./models/blog.js')
const blogRoutes=require('./routes/blogRoutes')
//creating an express app
const app=express()
// connect to mongodb
// mongodb+srv://Zvki1:Zvki1@nodetuts.wtmle1g.mongodb.net/
// const dbURI="mongodb+srv://Zvki1:Zvki1@nodetuts.wtmle1g.mongodb.net/"
const dbURI="mongodb+srv://Zvki1:Zvki1@nodetuts.wtmle1g.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>{console.log('connected to mdb')
        app.listen(3000)})
    .catch((err)=>console.log(err))

//register view engine

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.redirect('/blogs')
})


app.get('/about',async(req,res)=>{
   
   res.render('about',{title:'About'})
})
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

//blog routes
app.use('/blogs',blogRoutes)    




// 404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:'Error'})
})

