const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mySaloon');

//user routes 

const user_route = require('./routes/userRoutes');
app.use('/api', user_route)


// category routes
const category_routes = require('./routes/categoryRoute');
app.use('/api', category_routes);

//subcategory routes 

const subcategory_route = require('./routes/subCategoryRoutes');
app.use('/api', subcategory_route);

// product routes::::::
const product_routes = require('./routes/productRoute');
app.use('/api', product_routes);


app.listen(3000, function () {
  console.log("Server is ready");
})