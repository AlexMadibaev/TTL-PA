
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
