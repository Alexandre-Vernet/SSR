const express = require('express');
const app = express();
const cors = require('cors');
const port = 3333;

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
});

app.get('/test', cors(corsOptions), (req, res) => {
    res.send({
        message: 'Hello World!'
    })
});

app.listen(port, () => console.log(`My-app listening on port ${ port }!`));
