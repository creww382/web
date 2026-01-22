// server.js atau auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Database sementara (ganti dengan database sesungguhnya)
const users = [
    {
        id: 1,
        username: 'admin',
        password: '$2a$10$N9qo8uLOickgx2ZMRZoMy.Mrq4H.F7J3Y1.6U6X7pU6e6tY7QXWzK', // hashed "admin123"
        role: 'admin',
        fullName: 'Administrator Utama'
    },
    {
        id: 2,
        username: 'owner',
        password: '$2a$10$N9qo8uLOickgx2ZMRZoMy.Mrq4H.F7J3Y1.6U6X7pU6e6tY7QXWzK', // hashed "owner123"
        role: 'owner',
        fullName: 'Pemilik Madrasah'
    }
    // Tambahkan hanya admin/owner lainnya
];

// Middleware untuk memverifikasi token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ status: 'error', message: 'Token tidak ditemukan' });
    
    jwt.verify(token, process.env.JWT_SECRET || 'secret_key_admin_madrasah', (err, user) => {
        if (err) return res.status(403).json({ status: 'error', message: 'Token tidak valid' });
        
        // Cek apakah user adalah admin atau owner
        if (user.role !== 'admin' && user.role !== 'owner') {
            return res.status(403).json({ status: 'error', message: 'Akses ditolak' });
        }
        
        req.user = user;
        next();
    });
};

// Route login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Cari user
        const user = users.find(u => u.username === username);
        
        // Validasi user
        if (!user) {
            return res.status(401).json({ 
                status: 'error', 
                message: 'Username atau password salah' 
            });
        }
        
        // Hanya izinkan admin atau owner
        if (user.role !== 'admin' && user.role !== 'owner') {
            return res.status(403).json({ 
                status: 'error', 
                message: 'Akses ditolak. Hanya untuk admin/owner' 
            });
        }
        
        // Verifikasi password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ 
                status: 'error', 
                message: 'Username atau password salah' 
            });
        }
        
        // Buat token JWT
        const token = jwt.sign(
            { 
                id: user.id, 
                username: user.username, 
                role: user.role,
                fullName: user.fullName 
            },
            process.env.JWT_SECRET || 'secret_key_admin_madrasah',
            { expiresIn: '8h' }
        );
        
        res.json({
            status: 'success',
            token: token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
                fullName: user.fullName
            }
        });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            status: 'error', 
            message: 'Terjadi kesalahan server' 
        });
    }
});

// Middleware untuk memeriksa role
const checkRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                status: 'error', 
                message: 'Akses ditolak. Role tidak diizinkan' 
            });
        }
        next();
    };
};

// Route yang hanya bisa diakses admin
router.get('/admin-only', authenticateToken, checkRole(['admin']), (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'Halo Admin!' 
    });
});

// Route yang hanya bisa diakses owner
router.get('/owner-only', authenticateToken, checkRole(['owner']), (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'Halo Owner!' 
    });
});

// Route yang bisa diakses admin atau owner
router.get('/admin-owner', authenticateToken, checkRole(['admin', 'owner']), (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'Halo Admin/Owner!' 
    });
});

module.exports = router;