import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';

export const UserPersistExample = () => {
    const [name, setName] = useState(localStorage.getItem('user_name') || '');

    useEffect(() => {
        localStorage.setItem('user_name', name);
    }, [name]);

    return (
        <Box>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 1 }}>Persistencia</Typography>
            <TextField 
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ bgcolor: '#333', input: { color: 'white' }, borderRadius: 1 }}
            />
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#aaa' }}>
                Se guarda en LocalStorage
            </Typography>
        </Box>
    );
};