const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple root response
app.get('/', (req, res) => {
    res.send('Backend is alive!');
});

// Rooms endpoint
app.get('/api/rooms', (req, res) => {
    res.json({
        rooms: [
            { code: 'ABC123', name: 'Demo Game', playerCount: 3 },
            { code: 'XYZ789', name: 'Math Challenge', playerCount: 8 }
        ]
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
