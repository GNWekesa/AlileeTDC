const http = require('http');
const { Server } = require('socket.io');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});
//below is to just have some text on the home page so that I know the server is running
app.get('/', (req, res) => {
  res.send('✅ AlileeTDC Backend is running');
});


// ✅ Inject io into every request
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());
app.use(express.json());

// Routes
const postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Socket setup
io.on('connection', socket => {
  console.log('🟢 User connected:', socket.id);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
