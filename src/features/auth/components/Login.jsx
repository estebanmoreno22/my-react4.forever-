import React, { useState } from 'react'; // 1. Agregamos useState para el aviso
import { 
  Box, Typography, TextField, Button, Paper, InputAdornment, 
  IconButton, Container, Snackbar, Alert 
} from '@mui/material'; // 2. IMPORTANTE: Agregamos Snackbar y Alert aquí
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useLoginForm } from '../hooks/useLoginForm';

const Login = () => {
  const {
    email, setEmail, password, setPassword,
    showPassword, togglePassword, emailValid, passwordValid, formValid
  } = useLoginForm();

  // 3. ESTADO PARA EL AVISO PROFESIONAL
  const [open, setOpen] = useState(false);

  // 4. FUNCIÓN DE LOGIN CORREGIDA
  const handleLogin = (e) => {
    e.preventDefault();
    if (formValid) {
      setOpen(true); // En lugar del alert, abrimos el Snackbar
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'radial-gradient(circle at center, #0a1929 0%, #000 100%)', // Fondo con profundidad
      p: 2 
    }}>
      <Container maxWidth="xs">
        <Paper elevation={0} sx={{ 
          p: 5, borderRadius: 6, 
          bgcolor: 'rgba(255, 255, 255, 0.03)', // Efecto Glassmorphism
          backdropFilter: 'blur(15px)', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          '&:hover': { borderColor: 'rgba(0, 229, 255, 0.3)' }
        }}>
          
          <Typography variant="h3" sx={{ 
            fontWeight: 900, mb: 1, letterSpacing: -2,
            background: 'linear-gradient(90deg, #00e5ff 0%, #7c1fa2 100%)', // Título con degradado
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            FOREVER
          </Typography>

          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 4 }}>
            INGRESA A TU CUENTA
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              placeholder="Correo electrónico"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={email.length > 0 && !emailValid}
              sx={{ mb: 2 }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: emailValid ? '#00e5ff' : 'rgba(255,255,255,0.3)', mr: 1 }} />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2, px: 2, py: 1.5, color: 'white',
                  border: '1px solid transparent',
                  '&.Mui-focused': { border: '1px solid #00e5ff' },
                  '&.Mui-error': { border: '1px solid #ff1744' }
                }
              }}
            />

            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={password.length > 0 && !passwordValid}
              sx={{ mb: 3 }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: passwordValid ? '#00e5ff' : 'rgba(255,255,255,0.3)', mr: 1 }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePassword} sx={{ color: 'rgba(255,255,255,0.3)' }}>
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2, px: 2, py: 1.5, color: 'white',
                  border: '1px solid transparent',
                  '&.Mui-focused': { border: '1px solid #00e5ff' },
                  '&.Mui-error': { border: '1px solid #ff1744' }
                }
              }}
            />

            <Button
              type="submit"
              fullWidth
              disabled={!formValid}
              variant="contained"
              sx={{ 
                py: 1.8, borderRadius: 2, fontWeight: 'bold',
                transition: '0.3s',
                background: formValid ? 'linear-gradient(45deg, #00e5ff 30%, #7c1fa2 90%)' : '#222',
                boxShadow: formValid ? '0 4px 20px rgba(0, 229, 255, 0.3)' : 'none',
              }}
            >
              INICIAR SESIÓN
            </Button>
          </form>
        </Paper>
      </Container>

      {/* 5. AVISO DE BIENVENIDA DINÁMICO */}
      <Snackbar 
        open={open} 
        autoHideDuration={4000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleClose} 
          severity="success" 
          variant="filled"
          sx={{ 
            width: '100%', 
            bgcolor: '#00e5ff', 
            color: '#000',
            fontWeight: 'bold',
            borderRadius: 3,
            boxShadow: '0 8px 16px rgba(0, 229, 255, 0.4)',
            '& .MuiAlert-icon': { color: '#000' }
          }}
        >
          {/* Muestra el nombre antes del @ en mayúsculas */}
          ¡BIENVENIDO DE NUEVO, {email.split('@')[0].toUpperCase()}!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;