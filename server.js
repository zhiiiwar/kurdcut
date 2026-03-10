const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const { I18n } = require('i18n');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// i18n Setup
const i18n = new I18n({
    locales: ['en', 'ku', 'ar'],
    directory: path.join(__dirname, 'locales'),
    defaultLocale: 'en',
    cookie: 'lang'
});

// Middleware
app.use(helmet({
    contentSecurityPolicy: false, // Temporarily disabled for local dev / unpkg CDNs
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(i18n.init); // Initialize i18n middleware

// Language Switch Middleware
app.use((req, res, next) => {
    const lang = req.query.lang;
    if (lang && ['en', 'ku', 'ar'].includes(lang)) {
        res.cookie('lang', lang, { maxAge: 900000, httpOnly: true });
        return res.redirect(req.originalUrl.split('?')[0]);
    }
    next();
});

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/privacy', (req, res) => {
    res.render('privacy');
});

app.get('/terms', (req, res) => {
    res.render('terms');
});

app.get('/business-subscription', (req, res) => {
    res.render('subscription');
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
