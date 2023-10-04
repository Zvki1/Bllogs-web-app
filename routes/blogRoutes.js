const express = require('express');
const router = express.Router();
const Blog=require('../models/blog')

router.get('/',async (req,res)  =>{
    
    Blog.find().sort({ createdAt: -1 })

   .then(result=>{
      res.render('index',{title:'all blogs',blogs:result})
   })
   .catch(err=>{
       console.log(err);
   })
})


router.post('/',(req,res)=>{
    const blog=new Blog(req.body)
    blog.save()
    .then(result=>{
        res.redirect('/')
    })
    })
 router.get('/create',(req,res)=>{
    
        res.render('create',{title:'Create'})
    })
router.get('/:id',(req,res)=>{
        const id=req.params.id
        Blog.findById(id)
        .then(result=>{
            res.render('details',{blog:result,title:'blog details'})
        })  
        .catch(err=>{
            console.log(err);
        })
    })

    
router.delete('/:id',(req,res)=>{
    const id=req.params.id
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/'})
    })
    .catch(err=>{
        console.log(err);
    })
})




module.exports = router;