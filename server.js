const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from root

// Utility functions
function readData(filename) {
    const filePath = path.join(__dirname, 'data', filename);
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

function saveData(filename, data) {
    const filePath = path.join(__dirname, 'data', filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// API Routes
// Berita routes
app.get('/api/berita', (req, res) => {
    try {
        const berita = readData('berita.json');
        res.json(berita);
    } catch (error) {
        res.status(500).json({ error: 'Gagal membaca data berita' });
    }
});

app.post('/api/berita', (req, res) => {
    try {
        const { judul, kategori, gambar, isi, author } = req.body;
        
        if (!judul || !isi) {
            return res.status(400).json({ error: 'Judul dan isi berita wajib diisi' });
        }
        
        const berita = readData('berita.json');
        const newId = berita.length > 0 ? Math.max(...berita.map(b => b.id)) + 1 : 1;
        
        const newBerita = {
            id: newId,
            judul,
            tanggal: new Date().toISOString().split('T')[0],
            kategori: kategori || 'berita',
            gambar: gambar || 'https://via.placeholder.com/600x400?text=Berita+Baru',
            isi,
            author: author || 'Admin'
        };
        
        berita.push(newBerita);
        saveData('berita.json', berita);
        
        res.json({ status: 'success', message: 'Berita berhasil ditambahkan',  newBerita });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan berita' });
    }
});

app.put('/api/berita/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { judul, kategori, gambar, isi, author, tanggal } = req.body;
        
        const berita = readData('berita.json');
        const index = berita.findIndex(b => b.id === id);
        
        if (index === -1) {
            return res.status(404).json({ error: 'Berita tidak ditemukan' });
        }
        
        berita[index] = {
            ...berita[index],
            judul: judul || berita[index].judul,
            tanggal: tanggal || berita[index].tanggal,
            kategori: kategori || berita[index].kategori,
            gambar: gambar || berita[index].gambar,
            isi: isi || berita[index].isi,
            author: author || berita[index].author
        };
        
        saveData('berita.json', berita);
        res.json({ status: 'success', message: 'Berita berhasil diperbarui', berita: berita[index] });
    } catch (error) {
        res.status(500).json({ error: 'Gagal memperbarui berita' });
    }
});

app.delete('/api/berita/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        let berita = readData('berita.json');
        const initialLength = berita.length;
        
        berita = berita.filter(b => b.id !== id);
        
        if (berita.length === initialLength) {
            return res.status(404).json({ error: 'Berita tidak ditemukan' });
        }
        
        saveData('berita.json', berita);
        res.json({ status: 'success', message: 'Berita berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus berita' });
    }
});

// Guru routes
app.get('/api/guru', (req, res) => {
    try {
        const guru = readData('guru.json');
        res.json(guru);
    } catch (error) {
        res.status(500).json({ error: 'Gagal membaca data guru' });
    }
});

app.post('/api/guru', (req, res) => {
    try {
        const { nama, jabatan, mapel, foto, email, no_telp } = req.body;
        
        if (!nama || !mapel) {
            return res.status(400).json({ error: 'Nama dan mata pelajaran wajib diisi' });
        }
        
        const guru = readData('guru.json');
        const newId = guru.length > 0 ? Math.max(...guru.map(g => g.id)) + 1 : 1;
        
        const newGuru = {
            id: newId,
            nama,
            jabatan: jabatan || 'Guru',
            mapel,
            foto: foto || 'https://via.placeholder.com/200x200?text=Guru',
            email: email || '',
            no_telp: no_telp || ''
        };
        
        guru.push(newGuru);
        saveData('guru.json', guru);
        
        res.json({ status: 'success', message: 'Guru berhasil ditambahkan', newGuru });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan guru' });
    }
});

app.put('/api/guru/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nama, jabatan, mapel, foto, email, no_telp } = req.body;
        
        const guru = readData('guru.json');
        const index = guru.findIndex(g => g.id === id);
        
        if (index === -1) {
            return res.status(404).json({ error: 'Guru tidak ditemukan' });
        }
        
        guru[index] = {
            ...guru[index],
            nama: nama || guru[index].nama,
            jabatan: jabatan || guru[index].jabatan,
            mapel: mapel || guru[index].mapel,
            foto: foto || guru[index].foto,
            email: email || guru[index].email,
            no_telp: no_telp || guru[index].no_telp
        };
        
        saveData('guru.json', guru);
        res.json({ status: 'success', message: 'Guru berhasil diperbarui', guru: guru[index] });
    } catch (error) {
        res.status(500).json({ error: 'Gagal memperbarui guru' });
    }
});

app.delete('/api/guru/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        let guru = readData('guru.json');
        const initialLength = guru.length;
        
        guru = guru.filter(g => g.id !== id);
        
        if (guru.length === initialLength) {
            return res.status(404).json({ error: 'Guru tidak ditemukan' });
        }
        
        saveData('guru.json', guru);
        res.json({ status: 'success', message: 'Guru berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus guru' });
    }
});

// Siswa routes
app.get('/api/siswa', (req, res) => {
    try {
        const siswa = readData('siswa.json');
        res.json(siswa);
    } catch (error) {
        res.status(500).json({ error: 'Gagal membaca data siswa' });
    }
});

app.post('/api/siswa', (req, res) => {
    try {
        const { nama, nis, kelas, jurusan, foto, email, no_telp } = req.body;

        if (!nama || !nis || !kelas) {
            return res.status(400).json({ error: 'Nama, NIS, dan kelas wajib diisi' });
        }

        const siswa = readData('siswa.json');
        const newId = siswa.length > 0 ? Math.max(...siswa.map(s => s.id)) + 1 : 1;

        const newSiswa = {
            id: newId,
            nama,
            nis,
            kelas,
            jurusan: jurusan || '',
            foto: foto || 'https://via.placeholder.com/200x200?text=Siswa',
            email: email || '',
            no_telp: no_telp || ''
        };

        siswa.push(newSiswa);
        saveData('siswa.json', siswa);

        res.json({ status: 'success', message: 'Siswa berhasil ditambahkan', newSiswa });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan siswa' });
    }
});

app.put('/api/siswa/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nama, nis, kelas, jurusan, foto, email, no_telp } = req.body;

        const siswa = readData('siswa.json');
        const index = siswa.findIndex(s => s.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Siswa tidak ditemukan' });
        }

        siswa[index] = {
            ...siswa[index],
            nama: nama || siswa[index].nama,
            nis: nis || siswa[index].nis,
            kelas: kelas || siswa[index].kelas,
            jurusan: jurusan || siswa[index].jurusan,
            foto: foto || siswa[index].foto,
            email: email || siswa[index].email,
            no_telp: no_telp || siswa[index].no_telp
        };

        saveData('siswa.json', siswa);
        res.json({ status: 'success', message: 'Siswa berhasil diperbarui', siswa: siswa[index] });
    } catch (error) {
        res.status(500).json({ error: 'Gagal memperbarui siswa' });
    }
});

app.delete('/api/siswa/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        let siswa = readData('siswa.json');
        const initialLength = siswa.length;

        siswa = siswa.filter(s => s.id !== id);

        if (siswa.length === initialLength) {
            return res.status(404).json({ error: 'Siswa tidak ditemukan' });
        }

        saveData('siswa.json', siswa);
        res.json({ status: 'success', message: 'Siswa berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus siswa' });
    }
});

// Ekskul routes
app.get('/api/ekskul', (req, res) => {
    try {
        const ekskul = readData('ekskul.json');
        res.json(ekskul);
    } catch (error) {
        res.status(500).json({ error: 'Gagal membaca data ekskul' });
    }
});

app.post('/api/ekskul', (req, res) => {
    try {
        const { nama_ekskul, deskripsi, pembimbing, jadwal, foto } = req.body;

        if (!nama_ekskul || !deskripsi) {
            return res.status(400).json({ error: 'Nama ekskul dan deskripsi wajib diisi' });
        }

        const ekskul = readData('ekskul.json');
        const newId = ekskul.length > 0 ? Math.max(...ekskul.map(e => e.id)) + 1 : 1;

        const newEkskul = {
            id: newId,
            nama_ekskul,
            deskripsi,
            pembimbing: pembimbing || '',
            jadwal: jadwal || '',
            foto: foto || 'https://via.placeholder.com/400x300?text=Ekskul'
        };

        ekskul.push(newEkskul);
        saveData('ekskul.json', ekskul);

        res.json({ status: 'success', message: 'Ekskul berhasil ditambahkan', newEkskul });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan ekskul' });
    }
});

app.put('/api/ekskul/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nama_ekskul, deskripsi, pembimbing, jadwal, foto } = req.body;

        const ekskul = readData('ekskul.json');
        const index = ekskul.findIndex(e => e.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Ekskul tidak ditemukan' });
        }

        ekskul[index] = {
            ...ekskul[index],
            nama_ekskul: nama_ekskul || ekskul[index].nama_ekskul,
            deskripsi: deskripsi || ekskul[index].deskripsi,
            pembimbing: pembimbing || ekskul[index].pembimbing,
            jadwal: jadwal || ekskul[index].jadwal,
            foto: foto || ekskul[index].foto
        };

        saveData('ekskul.json', ekskul);
        res.json({ status: 'success', message: 'Ekskul berhasil diperbarui', ekskul: ekskul[index] });
    } catch (error) {
        res.status(500).json({ error: 'Gagal memperbarui ekskul' });
    }
});

app.delete('/api/ekskul/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        let ekskul = readData('ekskul.json');
        const initialLength = ekskul.length;

        ekskul = ekskul.filter(e => e.id !== id);

        if (ekskul.length === initialLength) {
            return res.status(404).json({ error: 'Ekskul tidak ditemukan' });
        }

        saveData('ekskul.json', ekskul);
        res.json({ status: 'success', message: 'Ekskul berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus ekskul' });
    }
});

// Galeri routes
app.get('/api/galeri', (req, res) => {
    try {
        const galeri = readData('galeri.json');
        res.json(galeri);
    } catch (error) {
        res.status(500).json({ error: 'Gagal membaca data galeri' });
    }
});

app.post('/api/galeri', (req, res) => {
    try {
        const { judul, gambar, deskripsi, kategori, tanggal } = req.body;

        if (!judul || !gambar) {
            return res.status(400).json({ error: 'Judul dan gambar wajib diisi' });
        }

        const galeri = readData('galeri.json');
        const newId = galeri.length > 0 ? Math.max(...galeri.map(g => g.id)) + 1 : 1;

        const newGaleri = {
            id: newId,
            judul,
            gambar,
            deskripsi: deskripsi || '',
            kategori: kategori || 'galeri',
            tanggal: tanggal || new Date().toISOString().split('T')[0]
        };

        galeri.push(newGaleri);
        saveData('galeri.json', galeri);

        res.json({ status: 'success', message: 'Galeri berhasil ditambahkan', newGaleri });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan galeri' });
    }
});

app.put('/api/galeri/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { judul, gambar, deskripsi, kategori, tanggal } = req.body;

        const galeri = readData('galeri.json');
        const index = galeri.findIndex(g => g.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Galeri tidak ditemukan' });
        }

        galeri[index] = {
            ...galeri[index],
            judul: judul || galeri[index].judul,
            gambar: gambar || galeri[index].gambar,
            deskripsi: deskripsi || galeri[index].deskripsi,
            kategori: kategori || galeri[index].kategori,
            tanggal: tanggal || galeri[index].tanggal
        };

        saveData('galeri.json', galeri);
        res.json({ status: 'success', message: 'Galeri berhasil diperbarui', galeri: galeri[index] });
    } catch (error) {
        res.status(500).json({ error: 'Gagal memperbarui galeri' });
    }
});

app.delete('/api/galeri/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        let galeri = readData('galeri.json');
        const initialLength = galeri.length;

        galeri = galeri.filter(g => g.id !== id);

        if (galeri.length === initialLength) {
            return res.status(404).json({ error: 'Galeri tidak ditemukan' });
        }

        saveData('galeri.json', galeri);
        res.json({ status: 'success', message: 'Galeri berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus galeri' });
    }
});

// Authentication routes
app.post('/api/auth/login', (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username dan password wajib diisi' });
        }

        const users = readData('user.json');
        const user = users.find(u => u.username === username);

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ error: 'Username atau password salah' });
        }

        // Create JWT token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET || 'secret_key',
            { expiresIn: '24h' }
        );

        res.json({
            status: 'success',
            message: 'Login berhasil',
            token
        });
    } catch (error) {
        res.status(500).json({ error: 'Gagal melakukan login' });
    }
});

// Logout route (for frontend to clear token)
app.post('/api/auth/logout', (req, res) => {
    res.json({ status: 'success', message: 'Logout berhasil' });
});

// Admin pages are served statically via express.static('.')

// Serve main pages
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});