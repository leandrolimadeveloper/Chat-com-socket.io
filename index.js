const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http) 

io.on('connection', (socket) => { 
    
    console.log('Usuário conectado: ' + socket.id)

    socket.on('disconnect', () => {
        console.log('X Desconectado: ' + socket.id)
    })

    socket.on('msg', (data) => {
        io.emit('showmsg', data)
        console.log(data)
    })
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

http.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})
