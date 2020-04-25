const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const app = express();


require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=> {
    console.log('app listening on port:', PORT)
});