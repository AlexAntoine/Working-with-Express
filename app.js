const express = require('express');
const path = require('path');

const port =  process.env.PORT|| 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.get('/search',(req, res)=>{

    res.render('search')
})

app.get('*',(req, res)=>{res.send('404. This page does not exist')})

