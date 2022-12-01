const express = require('express');
const app = express();
const cors = require('cors');
const port = 3333;

const path = require("path");
const fs = require("fs");

const buildFolderName = 'build';
app.use(express.json());
app.use(cors());
app.use(express.static(buildFolderName));

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}


app.get('/', async (req, res) => {
    res.sendFile(`${ __dirname }/${ buildFolderName }/index.html`);

    // const app = ReactDOMServer.renderToString(<App />);
    // const indexFile = path.resolve('./build/index.html');
    //
    // fs.readFile(indexFile, 'utf8', (err, data) => {
    //     if (err) {
    //         console.error('Something went wrong:', err);
    //         return res.status(500).send('Oops, better luck next time!');
    //     }
    //
    //     return res.send(
    //         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    //     );
    // });
});

app.get('/test', cors(corsOptions), (req, res) => {
    res.send({
        message: 'Hello World!'
    })
});

app.listen(port, () => console.log(`My-app listening on port ${ port }!`));
