const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end(`This is the home page`)
    }
    if(http.req === '/about') {
        res.end(`This is the about page`)
    }
    res.end(
        `<h1>Oops</h1>
        <p>This page does not exist</p>
        <a href='/'>Return to home</a>`
    )
})

server.listen(3000)