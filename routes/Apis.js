const path = require('path');

const express = require('express');
const {spawn}= require('child_process'); 

//Firebase
const firebase = require('../Firebase/admin');
const database = firebase.admin.database();
const relayRef = database.ref('/KmGa20NqmGZoIPOjdS4ALP0IHv93/admin/relays');
const infoRef = database.ref('/KmGa20NqmGZoIPOjdS4ALP0IHv93/admin/pi');

const router = express.Router();
const operations = require('./Operations/Operations');


router.post('/relay',(req,res,next)=>{
    var relay=req.body.Relay;
    var set=req.body.status;
    operations.signal();
    operations.setRelay(relay,set);
    console.log(req.body);
    res.end();
});

router.get('/get&&check=2sa69y23dgf',(req,res,next)=>{
    res.send(operations.getJsonData());
    res.end();
});

router.get('/check&&check=2sa69y23dgf',(req,res,next)=>{
    spawn('python',['/home/pi/myServer/py/buzzer.py','-p=notify']);
    res.end();
});


router.get('/temp&&check=2sa69y23dgf',(req,res,next)=>{
    var temp = operations.getTempreature();

    infoRef.set({'Temp':temp});

    res.send(temp);

    res.end();
});


router.post('/setname',(req,res,next)=>{
    var relay=req.body.Relay;
    var name=req.body.Name;
    operations.updateJsonData(name,relay);
    res.end();
});

module.exports = router;