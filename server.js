const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// CORS headers (allow Gimkit to fetch)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

app.use(express.json());

// In-memory room list
let rooms = [
    { code: 'ABC123', name: 'Demo Game', playerCount: 3 },
    { code: 'XYZ789', name: 'Math Challenge', playerCount: 8 }
];

// GET endpoint for rooms
app.get('/api/rooms', (req, res) => {
    try {
        res.json({ rooms });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// POST endpoint to add a room (optional)
app.post('/api/rooms', (req, res) => {
    try {
        const { code, name, playerCount } = req.body;
        if (!code || !name) {
            return res.status(400).json({ error: 'Missing code or name' });
        }
        rooms.push({ code, name, playerCount: playerCount || 0 });
        res.status(201).json({ message: 'Room added', room: { code, name, playerCount } });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Root endpoint (so you don't see "Cannot GET /")
app.get('/', (req, res) => {
    res.send('✅ Gimkit Room Finder backend is running. Use GET /api/rooms');
});

// Start server
app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
