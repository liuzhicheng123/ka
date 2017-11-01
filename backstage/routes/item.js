/**
 * Created by Administrator on 2017/10/31.
 */
var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var conn=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root"
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/cha', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var text=req.body.tex;
    console.log(text)
    conn.query("SELECT * FROM taobao.form", function(err, data, fields) {  // err 错误  rows形参
        res.send(data);
    });

});
router.post('/li', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var inn=req.body.inn;
    console.log(inn)
    conn.query("SELECT * FROM taobao.form LIMIT "+(inn-1)*2+","+2, function(err, data, fields) {  // err 错误  rows形参
        res.send(data);
    });

});
module.exports = router;
