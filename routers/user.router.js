var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res){});
router.post('/login', function(req, res){});
router.get('/users', function(req, res){});
router.get('/users/:id', function(req, res){});
router.put('/users/:id', function(req, res){});
router.delete('/users/:id', function(req, res){});

module.exports = router;
