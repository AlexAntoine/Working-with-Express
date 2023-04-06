require('dotenv');
const express = require('express');
const path = require('path');
const axios = require('axios');

const port =  process.env.PORT|| 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.get('/',async(req, res)=>{

    res.render('search');
});

app.get('/results',async(req, res)=>{
 
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&query=${req.query.search}`);

    res.render('movies', {data,searchQuery: req.query.search})

})

app.get('*',(req, res)=>{res.send('404. This page does not exist')})

