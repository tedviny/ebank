const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/home');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://frontend:4000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type,Authorization'
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/home', dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));