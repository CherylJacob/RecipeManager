const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
 
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err: any) => console.error(err));

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Server is running 🚀');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

import recipeRoutes from './routes/recipeRoutes';
app.use('/api/recipes', recipeRoutes);