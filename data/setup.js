// setup.js
const bcrypt = require('bcryptjs');

async function generateHashes() {
    try {
        const adminHash = await bcrypt.hash('admin123', 10);
        const ownerHash = await bcrypt.hash('owner123', 10);
        
        console.log('=== HASHED PASSWORDS ===');
        console.log('Admin (password: admin123):', adminHash);
        console.log('Owner (password: owner123):', ownerHash);
        console.log('=========================');
    } catch (error) {
        console.error('Error:', error);
    }
}

generateHashes();