var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var select = require('./mysql');

var router = express.Router();
router.use(bodyParser.json({ extended: true }));
router.use(cookieParser())
router.use(session())


//登录
router.post('/login',function(req, res) {
	console.log(req.body);
	var name = req.body.username;
	var password = req.body.password;
	select('SELECT id,username FROM user WHERE username = "'+ name + '" AND password = "' + password + '";').then(function(data) {
		if(data.status == 99999) {
			req.session.user = data.results[0].username;
			req.session.userid = data.results[0].id;
			res.json({status:99999,id:data.results[0].id,errcode:true});
			res.end();
		}else{
			res.json({status:00000});
			res.end();
		}		
	}).catch(function(err){
		console.log(err);
	})
	
})

//注册
router.post('/register',function(req, res) {
	var name = req.body.username;
	var password = req.body.password;
	var email = req.body.eMail;
	console.log(req.body);
	select('SELECT * FROM user WHERE username = "'+ name + '";')
		.then(function(data) {
			if(data.status == 99999) { 
				console.log("已有此用户名")
				res.json({status:00000,errcode:false,errMsg:"注册失败，已存在此用户名！"});
				res.end();
			}else {
				select('INSERT INTO user(username,password,e_mail) VALUES ("'+name+'", "'+password+'", "'+email+'");')
				.then(function(data) {
					res.json({status:99999,errcode:true,errMsg:"注册成功！"});
					res.end();
				}).catch(function(err){})
			}			
		}).catch(function(err){
			
		})
	
});

//退出
router.get("/logout",function(req, res) {
	delete req.session.user;
	delete req.session.userid;
	res.end();
})
 
//获取session
router.get("/session",function(req, res) {
	res.json({name:req.session.user,id:req.session.userid});
	res.end();
})

module.exports = router;