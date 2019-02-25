const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));

const fileUpload = require('./routes/FileUpload');

app.use('/FileUpload', fileUpload);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Is Listening On PORT ${port}`));