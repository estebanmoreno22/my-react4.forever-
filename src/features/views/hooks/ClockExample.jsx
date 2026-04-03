import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

export const ClockExample = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // Limpieza para que no se ponga lento
    }, []);

    return (
        <Box>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 1 }}>Reloj en Vivo</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <AccessTime sx={{ color: '#00e5ff' }} />
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                    {time}
                </Typography>
            </Box>
        </Box>
    );
};