const path = require('path');

const express = require('express');

const router = express.Router();

//Firebase
const firebase = require('../Firebase/admin');
const database = firebase.admin.database();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','html','HomePage.html'));

    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;

    var unixTime = Math.round(+new Date()/1000);
    database.ref('/users/visits/'+ip.split('.').join('-')).push({"Timestamp":unixTime});

    console.log(path.join('sent'));
});

module.exports = router;