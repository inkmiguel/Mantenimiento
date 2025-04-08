const express = require('express');
const cors = require('cors');
const { Document, Packer, Paragraph, TextRun } = require('docx');
const fs = require('fs');
const path = require('path');
const hbs = require('hbs');



const app = express();




app.use(express.static('src'))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
;
app.set('partials', path.join(__dirname, '/src/views/partials'));

app.use(cors());
app.use(express.json());



app.get('/', require('./routes/index'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
