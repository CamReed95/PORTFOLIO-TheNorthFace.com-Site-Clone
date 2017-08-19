require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const pc = require('./products_controller');
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;
const path = require('path');


const app = express();
app.use( bodyParser.json() );
app.use( cors() );
app.use(express.static(`${__dirname}/../build`));

massive( connectionString )
.then( db => {
  app.set( 'db', db );
  app.listen( port, () => {console.log(`Getting work done on port: ${port}.`)} )
} );



//ENDPOINTS GO HERE
app.get('/items/:gender/:category', pc.getCategoryByGender)
app.get('/item/product/:product_id', pc.getProductById)


//KEEP ALL ENDPOINTS ABOVE THIS LINE
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
})

module.exports = app;
