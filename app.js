//Express js
const express =require('express'); 
const app = express(); 

//Firebase
const firebase = require('./Firebase/admin');

//Routes
const homePage = require('./routes/HomePage');
const apis = require('./routes/Apis');

//Utils
const path=require('path'); 
const bodyParser = require('body-parser'); 
app.set('trust proxy', true);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'html')));
app.use(bodyParser.json());

//Default HomePage
app.use(homePage);

//For Apis
app.use(apis);

//Firebase Event Listeners
firebase.resetRelayListener();
firebase.triggerShutdownListener();
firebase.triggerRebootListener();
firebase.initInfoListener();
firebase.initRelayListeners();


app.listen(8080);