const http = require('http');
const fs = require('fs');
const url = require('url');
const axios = require('axios');


const punto1js = require('./modulos/punto1');



const server = http.createServer((req, res) => {


    //Path
    const { query, pathname } = url.parse(req.url, true);

    //Rutas

    if (pathname === '/') {

        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                dataView = data.replace('{%CONTENIDO%}', '');
                res.end(dataView);
            }
        });
    } else if (pathname == '/punto_1') {
        const contenido = fs.readFileSync(`${__dirname}/vistas/punto1.html`, 'utf8');
        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                let num=0;
                if (req.url.indexOf("?") > 1) {
                    let url_data = req.url.split("?")[1].split("&");
                    let num1 = url_data[0].split("=")[1];
                    let num2 = url_data[1].split("=")[1];
                    num=punto1js(num1, num2);
                }
                dataView = data.replace('{%CONTENIDO%}', contenido);
                dataView = dataView.replace('{%VALOR%}',num);
                res.end(dataView);
            }
        });

    } else if (pathname == '/punto_2') {
        const contenido = fs.readFileSync(`${__dirname}/vistas/punto2.html`, 'utf8');
        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', async (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                dataView = data.replace('{%CONTENIDO%}', contenido);
                res.end(dataView);
            }
        });

    
    }

     else if (pathname == '/punto_3') {
        const contenido = fs.readFileSync(`${__dirname}/vistas/punto3.html`, 'utf8');
        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                
                dataView = data.replace('{%CONTENIDO%}', contenido);
                
                res.end(dataView);
            }
        });

    } else if (pathname == '/punto_4') {
        const contenido = fs.readFileSync(`${__dirname}/vistas/punto4.html`, 'utf8');
        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                
                dataView = data.replace('{%CONTENIDO%}', contenido);
                
                res.end(dataView);
            }
        });

    } else if (pathname == '/punto_5') {
        const contenido = fs.readFileSync(`${__dirname}/vistas/punto5.html`, 'utf8');
        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                
                dataView = data.replace('{%CONTENIDO%}', contenido);
                
                res.end(dataView);
            }
        });

    } else if (pathname == '/punto_6') {
        const contenido = fs.readFileSync(`${__dirname}/vistas/punto6.html`, 'utf8');
        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                
                dataView = data.replace('{%CONTENIDO%}', contenido);
                
                res.end(dataView);
            }
        });

    } else if (pathname == '/punto_7') {
        const contenido = fs.readFileSync(`${__dirname}/vistas/punto7.html`, 'utf8');
        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                
                dataView = data.replace('{%CONTENIDO%}', contenido);
                
                res.end(dataView);
            }
        });

    } else if (pathname == '/punto_8') {
        const contenido = fs.readFileSync(`${__dirname}/vistas/punto8.html`, 'utf8');
        const index = fs.readFile(`${__dirname}/vistas/index.html`, 'utf8', (err, data) => {
            if (err) {
                res.end('ERROR');
            } else {
                
                dataView = data.replace('{%CONTENIDO%}', contenido);
                
                res.end(dataView);
            }
        });

    } else {
        res.writeHead(404);
        res.end('PAGINA NO ENCONTRADA');
    }

});

server.listen(3000, function () {
    console.log('La Aplicación está funcionando en el puerto 3000, en la direccion: http://localhost:3000');
});