// api/auth/verify
router.get('/verify', authenticateToken, (req, res) => {
    res.json({
        status: 'success',
        user: req.user
    });
});