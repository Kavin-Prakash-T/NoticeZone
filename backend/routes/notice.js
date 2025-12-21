const {addNotice, getNotices,getNoticesById,deleteNotice} = require('../controllers/noticeController');
const express = require('express');
const router = express.Router();

router.post('/', addNotice);
router.get('/', getNotices);
router.get('/:id', getNoticesById);
router.delete('/:id',deleteNotice)

module.exports = router;