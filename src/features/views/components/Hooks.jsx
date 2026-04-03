import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// --- RUTAS CORREGIDAS ---
import { CounterExample } from "../hooks/CounterExample";
import { ColorExample } from "../hooks/ColorExample";
import { ClockExample } from "../hooks/ClockExample";
import { UserPersistExample } from "../hooks/UserPersistExample";
import { ToggleExample } from "../hooks/ToggleExample";
import { InputExample } from "../../../../InputExample";
import { WindowWidthExample } from "../hooks/WindowWidthExample";
import { FetchExample } from "../hooks/FetchExample";

const Hooks = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#000', minHeight: '100vh' }}>
      <Typography variant="h3" sx={{ color: '#00e5ff', mb: 5, textAlign: 'center', fontWeight: 'bold' }}>
        Ejemplos de React Hooks
      </Typography>
      
      <Grid container spacing={3}>
        {[
          { title: "useState: Contador", component: <CounterExample /> },
          { title: "useState: Colores", component: <ColorExample /> },
          { title: "useEffect: Reloj", component: <ClockExample /> },
          { title: "useEffect: LocalStorage", component: <UserPersistExample /> },
          { title: "useState: Toggle", component: <ToggleExample /> },
          { title: "useState: Formulario", component: <InputExample /> },
          { title: "useEffect: Ventana", component: <WindowWidthExample /> },
          { title: "useEffect: API Fetch", component: <FetchExample /> }
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ p: 3, bgcolor: '#1a1a1a', border: '1px solid #333', borderRadius: 2 }}>
              <Typography sx={{ color: '#7c1fa2', mb: 2, fontSize: '0.8rem', fontWeight: 'bold' }}>
                {item.title}
              </Typography>
              {item.component}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hooks;