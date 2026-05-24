const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let rooms = [
  { code: 'ABC123', name: 'Demo Game', playerCount: 3 },
  { code: 'XYZ789', name: 'Math Challenge', playerCount: 8 }
];

app.use(express.json());

app.get('/api/rooms', (req, res) => {
  res.json({ rooms });
});

app.post('/api/rooms', (req, res) => {
  const { code, name, playerCount } = req.body;
  rooms.push({ code, name, playerCount });
  res.status(201).json({ message: 'Room added' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
