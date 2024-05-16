const express = require('express');
const router = express.Router();
const { listComic, detailComic, addComic, updateComic, removeComic } = require('./controller.js');

router.get('/', listComic);
router.get('/:id', detailComic);
router.post('/add', addComic);
router.put('/update/:id', updateComic);
router.delete('/delete/:id', removeComic); 

module.exports = router;
