import React, { useState } from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

export const CounterExample = () => {
    const [count, setCount] = useState(0);

    return (
        <Box>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 1 }}>Contador (useState)</Typography>
            <Typography variant="h3" sx={{ color: 'white', textAlign: 'center', my: 2 }}>
                {count}
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                    variant="contained" 
                    onClick={() => setCount(count + 1)} 
                    sx={{ bgcolor: '#00e5ff', color: 'black' }}
                >
                    <Add />
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => setCount(count - 1)} 
                    sx={{ bgcolor: '#7c1fa2' }}
                >
                    <Remove />
                </Button>
            </Stack>
        </Box>
    );
};