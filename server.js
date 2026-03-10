const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
    contentSecurityPolicy: false, // Temporarily disabled for local dev / unpkg CDNs
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    // Render the premium landing page, passing dynamic data if needed
    res.render('index', { 
        title: 'Kurd Cut | Premium Booking for Barbers & Salons',
        locale: 'en'
    });
});

// API Routes (Placeholder for Dashboard)
app.use('/api/v1/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'Kurd Cut API is running.' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n================================`);
    console.log(`Kurd Cut Server running on:`);
    console.log(`http://localhost:${PORT}`);
    console.log(`================================\n`);
});
