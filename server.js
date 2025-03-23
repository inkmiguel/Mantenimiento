const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');
const fs = require('fs');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware para archivos estáticos
app.use(express.static('public'));

// Middleware para parsear JSON
app.use(express.json());

// Ruta para generar el documento
app.post('/generar-documento', (req, res) => {
  const {
    ID_REPORTE,
    date,
    fecha_corte,
    nombre,
    apellido,
    idEquipo,
    frecuencia,
    piso
  } = req.body;

  try {
    // Cargar la plantilla .docx
    const template = fs.readFileSync('Documento.docx', 'binary');
    const zip = new PizZip(template);
    const doc = new Docxtemplater(zip);

    // Reemplazar placeholders con los datos
    doc.render({
      ID_REPORTE,
      date,
      fecha_corte,
      nombre,
      apellido,
      idEquipo,
      frecuencia,
      piso
    });

    // Generar el documento
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });

    // Enviar el documento como respuesta
    res.setHeader('Content-Disposition', 'attachment; filename=documento_generado.docx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.send(buffer);
  } catch (error) {
    console.error('Error al generar el documento:', error);
    res.status(500).send('Error al generar el documento');
  }
});

// Ruta principal (puedes modificarla según tus necesidades)
app.get('/', (req, res) => {
  res.render('index'); // Renderiza la vista principal
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});