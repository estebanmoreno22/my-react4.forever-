import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { Cloud } from '@mui/icons-material';

export const FetchExample = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const json = await response.json();
        setData(json);
        setLoading(false);
    };

    return (
        <Box>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 1 }}>Fetch Example</Typography>
            <Button variant="contained" onClick={fetchData} startIcon={<Cloud />} sx={{ mb: 2, bgcolor: '#7c1fa2' }}>
                Cargar Datos
            </Button>
            {loading && <CircularProgress size={20} sx={{ display: 'block', mb: 1 }} />}
            {data && <Typography variant="body2" sx={{ color: 'white' }}>User: {data.name}</Typography>}
        </Box>
    );
};