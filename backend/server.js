require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const formsRouter = require('./routes/form');
const responsesRouter = require('./routes/response');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/forms', formsRouter);
app.use('/api/responses', responsesRouter);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
