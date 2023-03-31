
// const http = require('http');
// const PORT = 8000; 

// const fs = require ('fs');
// const path = require('path');
// const url = require('url');

// const publicPath = "../public";

// const route = {
//     "/": "home.html",
//     "/car": "searchPage.html"
// }

// const mimeType = {
//     '.ico': 'image/x-icon',
//     '.html': 'text/html',
//     '.js': 'text/javascript',
//     '.json': 'application/json',
//     '.css': 'text/css',
//     '.png': 'image/png',
//     '.jpg': 'image/jpeg',
//     '.wav': 'audio/wav',
//     '.mp3': 'audio/mpeg',
//     '.svg': 'image/svg+xml',
//     '.pdf': 'application/pdf',
//     '.doc': 'application/msword'
//   };

// function onRequest(req, res){

//     const parsedUrl = url.parse(req.url);
//     let pathUrl = parsedUrl.pathname

//     const ext = path.parse(pathUrl).ext;
    

// }

// const server = http.createServer(onRequest);

// server.listen(PORT, '127.0.0.1', ()=>{
//     console.log("SERVER SUDAH BERJALAN, SILAHKAN DIBUKA http://127.0.0.1:%d", PORT);
// })

const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

const publicDir = path.join(__dirname, "../public")
app.use(express.static(publicDir));


app.get('/', (req, res)=> {
    res.status(200);
    res.sendFile(path.join(publicDir, 'home.html'));
})

app.get('/cars', (req, res)=> {
    res.status(200);
    res.sendFile(path.join(publicDir, 'searchPage.html'));
})

app.listen(port, ()=>{
    console.log('server sudah jalan')
})