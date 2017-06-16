var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var sessions = require('express-session');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl');
var app = express();

var corsOption = {
    origin: 'http://localhost: 3000'
};


app.use(bodyParser.json());
app.use(cors(corsOption));
app.use(sessions({ secret: config.sessionSecret }));

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles);



app.listen(3000, function() {
    console.log('server listening... go away now');
});
