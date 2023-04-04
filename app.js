const express = require('express');

const port =  process.env.PORT|| 3000;
const app = express();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.get('/',(req, res)=>{
    res.render('index.ejs')
});

app.get('/demo',(req, res)=>{
    res.render('demo.ejs')
});

app.get('/user/:id/:username',(req, res)=>{
    const id = req.params.id;
    const username = req.params.username;

    res.render('index.ejs', {id, username})
})

