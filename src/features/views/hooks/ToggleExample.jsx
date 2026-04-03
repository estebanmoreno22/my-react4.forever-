import React, { useState } from 'react';
import { Box, Button, Typography, Collapse } from '@mui/material';

export const ToggleExample = () => {
    const [show, setShow] = useState(false);

    return (
        <Box>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 1 }}>Toggle Example</Typography>
            <Button 
                variant="contained" 
                onClick={() => setShow(!show)}
                sx={{ bgcolor: '#7c1fa2', mb: 2 }}
            >
                {show ? "Ocultar Mensaje" : "Mostrar Mensaje"}
            </Button>
            <Collapse in={show}>
                <Typography sx={{ color: 'white', bgcolor: '#333', p: 2, borderRadius: 2 }}>
                    ¡Hola! Este mensaje aparece y desaparece usando un estado booleano.
                </Typography>
            </Collapse>
        </Box>
    );
};