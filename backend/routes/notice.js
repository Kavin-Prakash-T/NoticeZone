const { addNotice, getNotices, getNoticesById, deleteNotice, updateNotice } = require('../controllers/noticeController');
const { uploadPdf } = require('../middlewares/uploadPdf');
const express = require('express');
const router = express.Router();

router.post('/', uploadPdf.single("pdf"), addNotice);
router.get('/', getNotices);
router.get('/:id', getNoticesById);
router.delete('/:id', deleteNotice)
router.put('/:id', uploadPdf.single("pdf"), updateNotice)

module.exports = router;