const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')


app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //config do bodyParser

app.set("view engine","ejs") 

app.use(express.static(path.join(__dirname,"public")))

app.get('/', function(req,res){
  res.render('index.ejs', {})
})

app.get('/usuarios', function(req,res){
    res.render('usuarios.ejs',{usuarios:[
        {nome:'Julia', email:'julia@gmail.com'},
        {nome:'Laura', email:'laura@gmail.com'},
        {nome:'Clara', email:'clara@gmail.com'},
        {nome:'Eloisa', email:'eloisa@gmail.com'},
        {nome:'Yasmin', email:'yasmin@gmail.com'},
        {nome:'Leticia', email:'leticia@gmail.com'}
    ]})
  })

  app.get('/add', function(req,res){
    res.render('adiciona.ejs')
  })

  app.post('/add', function(req,res) {
   console.log("chegou aqui!")
  })


app.listen(3000, function(){
    console.log("Conexão inicializada na porta 3000!")
})