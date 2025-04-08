const express = require('express');
const router = express.Router();

router.post('/generar-doc', async (req, res) => {
    const datos = req.body;
  
    const doc = new Document({
      sections: [{
        children: [
          new Paragraph({ text: 'INFORME DE MANTENIMIENTO GENERAL', heading: 'Heading1' }),
          new Paragraph(`Fecha de Reparación: ${datos.fechaReparacion}`),
          new Paragraph(`Fecha de Corte: ${datos.fechaCorte}`),
          new Paragraph(`Nombre del Responsable: ${datos.nombre} ${datos.apellido}`),
          new Paragraph(`ID del Reporte: ${datos.idReporte}`),
          new Paragraph(`ID del Equipo: ${datos.idEquipo}`),
          new Paragraph(`Frecuencia de Mantenimiento: ${datos.frecuencia}`),
          new Paragraph(`Área / Piso: ${datos.piso}`),
          new Paragraph(''),
          new Paragraph('Estado Final del Equipo: _____________________'),
          new Paragraph('Observaciones: _____________________________'),
          new Paragraph(''),
          new Paragraph('Firma del Técnico: _________________________'),
          new Paragraph('Firma del Supervisor: ______________________')
        ],
      }],
    });
  
    const buffer = await Packer.toBuffer(doc);
    const fileName = `Reporte_${datos.idComprobante}.docx`;
    const filePath = path.join(__dirname, fileName);
  
    fs.writeFileSync(filePath, buffer);
    res.download(filePath, fileName, () => fs.unlinkSync(filePath));
  });
  

module.exports = router