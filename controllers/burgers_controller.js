var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    // burger.all(function(data) {
    //     var burgerObj = {
    //         burgers: data
    //     };
    //     console.log(burgerObj);
    //     res.render('index', burgerObj)
    // })
    console.log("main")
    res.render('index')

})

module.exports = router;