import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export const WindowWidthExample = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 1 }}>Window Width</Typography>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
                {width}px
            </Typography>
        </Box>
    );
};