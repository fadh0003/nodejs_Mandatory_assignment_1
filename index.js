var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = __dirname + '/public/';

app.use(bodyParser.urlencoded({extended : true}));

// app.use(express.static('img'));
// app.use(express.static('Css'));
app.use(express.static('wwwroot'));

app.get('/', function(req, res)
{
    res.sendFile(path + 'index.html', function(err)
    {

    });  
});

app.get('/index', function(req, res)
{
    res.sendFile(path + 'index.html', function(err)
    {

    });  
});

app.get('/contact', function(req, res)
{
    res.sendFile(path + 'contact.html', function(err)
    {
               
    });  
});

app.get('/student_activities', function(req, res)
{
    res.sendFile(path + 'student_activities.html', function(err)
    {
               
    });  
});


app.get('/about',function(req, res)
{
    res.sendFile(path + 'about.html', function(err)
    {
             
    });
});

app.get('/subscribe', function(req, res)
{
    res.sendFile(path + 'subscribe.html', function(err)
    {
             
    });
});

app.post('/subscribe', function(req, res)
{

    res.sendFile(path + 'subscribe.html', function(err)
    {
                
    }); 
    
});



app.listen(process.env.PORT || 3000);