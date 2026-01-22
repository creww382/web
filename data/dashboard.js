// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah user sudah login
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!token || !user) {
        // Redirect ke login page
        window.location.href = 'login.html';
        return;
    }
    
    // Verifikasi token dengan backend
    fetch('/api/auth/verify', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            // Token tidak valid
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        }
        return response.json();
    })
    .then(data => {
        // Tampilkan nama user
        document.getElementById('userName').textContent = data.user.fullName;
        document.getElementById('userRole').textContent = data.user.role;
        
        // Tampilkan menu berdasarkan role
        if (data.user.role === 'owner') {
            document.getElementById('ownerMenu').style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        window.location.href = 'login.html';
    });
    
    // Logout function
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    });
});