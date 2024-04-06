'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Michelle.v.t\n')
})
app.get('/', (req, res) => {
    res.send('51021005 \n')
})
app.get('/', (req, res) => {
    res.send('Sistem Informasi\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)