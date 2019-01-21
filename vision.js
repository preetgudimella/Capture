const vision = require('@google-cloud/vision');                       // Imports the Google Cloud client library

export default googleVision = async (fileName) => {                   // Creates a client
  console.log('googleVision', fileName)
  const client = new vision.ImageAnnotatorClient();
  // const fileName = 'gs://vision-api-handwriting-ocr-bucket/handwriting_image.png';
  const [result] = await client.documentTextDetection(fileName);      // Read a local image as a text document
  const fullTextAnnotation = result.fullTextAnnotation;
  console.log(`Full text: ${fullTextAnnotation.text}`);
  fullTextAnnotation.pages.forEach(page => {
    page.blocks.forEach(block => {
      console.log(`Block confidence: ${block.confidence}`);
      block.paragraphs.forEach(paragraph => {
        console.log(`Paragraph confidence: ${paragraph.confidence}`);
        paragraph.words.forEach(word => {
          const wordText = word.symbols.map(s => s.text).join('');
          console.log(`Word text: ${wordText}`);
          console.log(`Word confidence: ${word.confidence}`);
          word.symbols.forEach(symbol => {
            console.log(`Symbol text: ${symbol.text}`);
            console.log(`Symbol confidence: ${symbol.confidence}`);
          });
        });
      });
    });
  })
}

googleVision()
