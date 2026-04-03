import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Palette } from '@mui/icons-material';

export const ColorExample = () => {
    const [color, setColor] = useState('#7c1fa2');

    const generateColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    };

    return (
        <Box>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 1 }}>Cambiar Color</Typography>
            <Box 
                sx={{ 
                    width: '100%', 
                    height: '50px', 
                    bgcolor: color, 
                    borderRadius: 2, 
                    mb: 2,
                    transition: '0.5s' 
                }} 
            />
            <Button 
                fullWidth
                variant="contained" 
                onClick={generateColor} 
                startIcon={<Palette />}
                sx={{ bgcolor: '#333', '&:hover': { bgcolor: color } }}
            >
                Nuevo Color
            </Button>
        </Box>
    );
};