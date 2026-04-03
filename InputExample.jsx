import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';

export const InputExample = () => {
    const [text, setText] = useState("");

    return (
        <Box>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 1 }}>Input Real-time</Typography>
            <TextField 
                fullWidth
                variant="outlined"
                placeholder="Escribe algo..."
                onChange={(e) => setText(e.target.value)}
                sx={{ 
                    input: { color: 'white' }, 
                    bgcolor: '#333', 
                    borderRadius: 1,
                    mb: 2 
                }}
            />
            <Typography sx={{ color: 'white' }}>
                Estás escribiendo: <span style={{ color: '#00e5ff' }}>{text}</span>
            </Typography>
        </Box>
    );
};