const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const visionKey = require('../credentials')

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 },                       // file size limitation in bytes
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

  // const url = 'https://vision.googleapis.com/v1/images:annotate?alt=json&key=d21393cfb419b674749726cf1d7e961e8939b98d'
  const url = `https://vision.googleapis.com/v1/images:annotate?alt=json&key=${visionKey}`;
  const translation = await axios.post(url, configuration);
  return translation;
}

module.exports = router;
