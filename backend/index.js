const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/herculesRoutes');


const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(`/hercules`, routes);


const port = 3009;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
