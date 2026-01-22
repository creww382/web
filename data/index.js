const express = require("express");
const app = express();
const PORT = 3000;

console.log("🚀 Mencoba menjalankan server...");

// Route paling sederhana
app.get("/", (req, res) => {
    res.send("<h1>SERVER MADRASAH BERJALAN!</h1><p>Coba buka <a href='http://localhost:3000/test'>/test</a></p>");
});

app.get("/test", (req, res) => {
    res.json({ 
        status: "success", 
        message: "Server berjalan dengan baik!",
        time: new Date().toLocaleString()
    });
});

// Start server dengan error handling
try {
    app.listen(PORT, () => {
        console.log(`✅ SERVER BERJALAN di http://localhost:${PORT}`);
        console.log(`📡 Buka browser dan akses: http://localhost:${PORT}`);
        console.log(`⏰ Waktu: ${new Date().toLocaleString()}`);
    });
} catch (error) {
    console.error("❌ GAGAL menjalankan server:", error.message);
}
