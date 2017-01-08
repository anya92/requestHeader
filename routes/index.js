var express = require('express');
var router = express.Router();
var accepts = require('accepts');
var requestIp = require('request-ip');
var parser = require('ua-parser-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Request Header Parser Microservice' });
});
router.get('/whoami', function(req, res) {
    var ip = requestIp.getClientIp(req);
    var lang = (accepts(req).language())[0];
    var ua = parser(req.headers['user-agent']);
    var os = ua.os.name + " " + ua.os.version;
    res.json({"ip_address": ip, "language": lang, "operating_system": os});
});

module.exports = router;
