const express = require('express') //Another way of importing express
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Listening for get method 
//and a request at url (endpoint) local host :3000
//Takes in arguments request and response
//res.send gives back text
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Listens on localhost:3000 and returns the response
app.get('/datarep', (req,res) => {
    res.send("Welcome to Data Representation & Querying")
})

//Listens on localhost:3000 and returns the response
//here we return the query first name and last name
app.get('/name', (req,res) => {
    console.log(req.query.fname);
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//returns a post
app.post('/name', (req,res) => {
    console.log(req.body);
    res.send('Hello Post' + req.body.fname + ' ' + req.body.lname);
})

//Returns the name of person when typed in url
//:name is the arguement being placed inside the url
app.get('/hello/:name', (req,res) => {
    res.send("hello " + req.params.name)
})

//this returns a json file
//instead of res.send for text
//we use res.json for returning json files
app.get('/api/books', (req,res) => {
   const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ]
    res.json({
        mybooks:books
    })
})

//returns a html file
//__dirname returns the current directory
//You can also use an absolute url if required
app.get('/test', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

//Get server to listen for request at local host :3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})