let express = require('express');
let router = express.Router();
let controller = require('../Controller/catController');

router.post('/', function (req, res) {
    controller.postCat(req, res);
});

router.get('/', (req, res) => {
    controller.getAllCats(req, res);
});

router.delete('/', function (req, res) {
    controller.deleteCat(req, res);
});

module.exports = router;