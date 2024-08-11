const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const cookieParser = require("cookie-parser");
const app = express();

const mail = require("./routes/mail");
app.use(bodyParser.json());

const db = 'your-mongodb-connection-string';
app.use(cookieParser())
app.use(cors({
    origin: "*",
    credential: true
}))


app.use("/api/v1/mail", mail)

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
