const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')

require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao('Marcus'))

app.use('/opa', (req, res, next) => {
    console.log("Antes...")
    next()
})

app.get('/cliente/relatorio', (req, res) =>{
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) =>{
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/cliente/:id', (req, res) =>{
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, res, next) =>{
    console.log("Durante...")
    res.json({
        "produto": "iPad",
        "preço": 2071.98,
    })
    //res.send('<h1>Estou bem!</h1><br><br><br><h2>Tipo é HTML!</h2>')
    //res.send('Estou bem')

    next()
})

app.use('/opa', (req, res) => {
    console.log("Depois...")
})

app.listen(3000, () => {
    console.log('Backend executando...')
})