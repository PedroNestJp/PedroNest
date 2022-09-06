const express = require('express')
const ejs = require('ejs')
const app = express()
const PORT = 3000

app.set('views engine, ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.render('home.ejs')
})

app.get('/recuperacao', (req,res) => {
    res.render('recuperacao.ejs')
})

app.get('/home', (req,res) => {
    res.render('home.ejs')
})

//app.get('/',(req, res) => {
    //res.render('/')
//})

app.get('/',(req, res) => {
    const body = req.body
    console.log(body)
    
    
})

// View.prototype.render = function render(options, callback) {
//     debug('render "%s"', this.path);
//     this.engine(this.path, options, callback);
//   };


app.listen(PORT, () => console.info(`Serviço rodando na porta : ${PORT}`))