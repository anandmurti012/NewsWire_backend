const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('db connected');
	})
	.catch((error) => {
		console.log(error);
	});

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.render('https://newswire-frontend.onrender.com');
});

const newsRoutes = require('./routes/news');
app.use(newsRoutes);

app.listen(process.env.PORT, () => {
	console.log('server started');
});
