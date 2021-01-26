const dotenv = require('dotenv').config();
const express = require('express');
const app = express();


//db connection
require('./config/database');


//including routers
const userAuthRouter = require('./routers/client/auth');
//reading parameter
app.use(express.urlencoded({extended:true}));


app.get('/', (req,res) => res.json({message:"This is a custom authentication script"})); // base url

app.use('api/user/',userAuthRouter);

/* starting to listen server */
app.listen(process.env.PORT, () => console.log('Server is active'));
/* end of starting to listen server */
