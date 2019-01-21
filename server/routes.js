const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
 });

router.get('/', (req, res, next) => {
  res.status(200).send('Hello');
});

router.post('/upload', upload.single('photo'), async (req, res, next) => {
  console.log('post route /upload');
  try {
    const base64 = req.file.buffer.toString('base64');
    await translateBase64(base64)
      .then((response) => {
        const translation = response.data.responses[0].fullTextAnnotation.text;
        console.log({translation})
        res.status(200).json(translation);
      });
  } catch (error) {
    console.error(error)
    next(error);
  }
});

async function translateBase64(base64String) {
  const configuration = {
    requests: [
      {
        image: {
          content: base64String,
        },
        features: [
          {
            type: 'DOCUMENT_TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  };

  const url = 'https://vision.googleapis.com/v1/images:annotate?alt=json&key=AIzaSyDRg0ilcbePFPR2Sq9NpzgcTboaflzvxio';
  // const url = 'https://vision.googleapis.com/v1/images:annotate?alt=json&key=d21393cfb419b674749726cf1d7e961e8939b98d'
  const axios = require('axios');
  const translation = await axios.post(url, configuration);
  return translation;
}



// router.post('/upload', upload.single('photo'), async (req, res, next) => {
//   console.log('post route /upload')
//   try {
//     const base64 = req.file.buffer.toString('base64');
//     const type = req.file.mimetype;
//     const output = await detectFulltext(`data:${type};base64,${base64}`);
//     // console.log(output);
//     res.status(200).json(output);
//   } catch (error) {
//     // console.error(error)
//     next(error)
//   }
// })

// Uploads to cloudinary
//   cloudinary.v2.uploader.upload(`data:${type};base64,${newPhoto}`, (err, photo) => {
//     if (err) {
//       console.error(err);
//       res.status(400).send(err);
//     } else {
//       const photoUrl = photo.url;
// }})

// router.post('/', async (req, res, next) => {
//   try {
//     res
//       .status(200)
//       .json(
//         await detectFulltext(
//           'https://westartwithgood.co/wp-content/uploads/2018/03/photograph-handwritten-text-1.jpg'
//         )
//       );
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

// async function detectFulltext(fileName) {
//   const vision = require('@google-cloud/vision');
//   const client = new vision.ImageAnnotatorClient();
//   const [result] = await client.documentTextDetection(fileName);
//   const fullTextAnnotation = result.fullTextAnnotation;
//   console.log(`Full text: ${fullTextAnnotation.text}`);
//   fullTextAnnotation.pages.forEach(page => {
//     page.blocks.forEach(block => {
//       console.log(`Block confidence: ${block.confidence}`);
//       block.paragraphs.forEach(paragraph => {
//         console.log(`Paragraph confidence: ${paragraph.confidence}`);
//         paragraph.words.forEach(word => {
//           const wordText = word.symbols.map(s => s.text).join('');
//           console.log(`Word text: ${wordText}`);
//           console.log(`Word confidence: ${word.confidence}`);
//           word.symbols.forEach(symbol => {
//             console.log(`Symbol text: ${symbol.text}`);
//             console.log(`Symbol confidence: ${symbol.confidence}`);
//           });
//         });
//       });
//     });
//   });
//   return fullTextAnnotation;
// }

module.exports = router;

// function sendUploadToGCS(req, res, next) {
//   if (!req.file) {
//     return next();
//   }

//   const gcsname = Date.now() + req.file.originalname;
//   const file = bucket.file(gcsname);

//   const stream = file.createWriteStream({
//     metadata: {
//       contentType: req.file.mimetype
//     },
//     resumable: false
//   });

//   stream.on('error', (err) => {
//     req.file.cloudStorageError = err;
//     next(err);
//   });

//   stream.on('finish', () => {
//     req.file.cloudStorageObject = gcsname;
//     file.makePublic().then(() => {
//       req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
//       next();
//     });
//   });

//   stream.end(req.file.buffer);
// }

// function getPublicUrl(filename) {
//   return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
// }
