import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export const UseOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener('online', handleStatus);
        window.addEventListener('offline', handleStatus);
        return () => {
            window.removeEventListener('online', handleStatus);
            window.removeEventListener('offline', handleStatus);
        };
    }, []);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CheckCircle sx={{ color: isOnline ? '#00e5ff' : 'red', fontSize: 30 }} />
            <Typography variant="h5" sx={{ color: 'white' }}>
                {isOnline ? 'En línea' : 'Sin conexión'}
            </Typography>
        </Box>
    );
};