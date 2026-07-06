const express = require('express');
const router = express.Router();
const { getInstruments, getInstrumentBySymbol } = require('../controllers/instrument.controller');

router.get('/', getInstruments);
router.get('/:symbol', getInstrumentBySymbol);

module.exports = router;