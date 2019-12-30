require('dotenv').config()
const express = require('express')
const app = express();
const massive = require('massive')

//controllers
const {getProducts, deleteProducts, addProducts, editProducts} = require('./controllers/products')

//dotenv
const {SERVER_PORT, CONNECTION_STRING} = process.env;

//app.use
app.use(express.json())

//db connection
massive(CONNECTION_STRING)
.then((db) => {
    app.set('db', db);
    console.log('Database Connected :D')
})

//endpoints
app.get('/api/products', getProducts)
app.post('/api/products', addProducts)
app.put('/api/products/:product_id', editProducts)
app.delete('/api/products/:product_id', deleteProducts)

//server listening
app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))