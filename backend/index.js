// Entry point for Express server
const express = require('express');
const cors = require('cors');
const app = express();
const sessionRoutes = require('./routes/session');
const statsRoutes = require('./routes/stats');

app.use(cors());
app.use(express.json());

app.use('/session', sessionRoutes);
app.use('/sessions', sessionRoutes);
app.use('/stats', statsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
