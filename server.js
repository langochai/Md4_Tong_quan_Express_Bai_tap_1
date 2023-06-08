const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const upload = multer();

app.set('view engine','ejs');
app.set('views','./views');
app.get('/',(req, res)=>{
    res.render('index')
});
const data = [];
app.post('/blog',upload.none(),(req,res)=>{
    if(req.body.title && req.body.content){
        const blog = {
            title : req.body.title,
            content : req.body.content
        }
        data.push(blog)
        res.render('blog',{data:data})
    }else{
        res.send('no segs is saved')
    }
})
app.listen(PORT,()=>{
    console.log(`segs at port ${PORT}`)
});