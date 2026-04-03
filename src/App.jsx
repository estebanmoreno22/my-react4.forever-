import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button, Badge, IconButton, useScrollTrigger, Slide, Snackbar, Alert } from '@mui/material';
import { Favorite, Build, LocalOffer, Star, Home, ShoppingCart, AccountCircle } from '@mui/icons-material';

import Banner from './features/views/components/Banner';
import MovieGrid from './features/views/components/MovieGrid';
import Hooks from './features/views/components/Hooks';
import Offers from './features/views/components/Offers';
import Articles from './features/views/components/Articles';
import Login from './features/auth/components/Login';
import { Favorites } from './features/views/components/Favorites'; // <--- IMPORTACIÓN CORREGIDA

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('forever_favs')) || []);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('forever_cart')) || []);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => { localStorage.setItem('forever_favs', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('forever_cart', JSON.stringify(cart)); }, [cart]);

  const showAlert = (msg, sev = 'success') => setAlert({ open: true, message: msg, severity: sev });

  const toggleFavorite = (movie) => {
    if (favorites.find(fav => fav.id === movie.id)) {
      setFavorites(favorites.filter(fav => fav.id !== movie.id));
      showAlert("Eliminado de favoritos", "info");
    } else {
      setFavorites([...favorites, movie]);
      showAlert("¡Añadido a favoritos!");
    }
  };

  const addToCart = (movie) => {
    if (cart.find(item => item.id === movie.id)) {
      setCart(cart.filter(item => item.id !== movie.id));
      showAlert("Quitado del carrito", "info");
    } else {
      setCart([...cart, movie]);
      showAlert("¡Añadido al carrito con éxito!");
    }
  };

  return (
    <Router>
      <Box sx={{ flexGrow: 1, bgcolor: '#000', minHeight: '100vh', color: 'white' }}>
        <HideOnScroll>
          <AppBar position="fixed" sx={{ 
            bgcolor: 'rgba(0,0,0,0.8)', 
            backdropFilter: 'blur(10px)', 
            borderBottom: '1px solid rgba(0,229,255,0.2)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.5)'
          }}>
            <Toolbar>
              <Typography variant="h5" sx={{ flexGrow: 1, color: '#00e5ff', fontWeight: 'bold', letterSpacing: 1 }}>FOREVER</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button component={Link} to="/" color="inherit" startIcon={<Home />}>INICIO</Button>
                  <Button component={Link} to="/hooks" color="inherit" startIcon={<Build />}>HOOKS</Button>
                  <Button component={Link} to="/offers" color="inherit" startIcon={<LocalOffer />}>OFERTAS</Button>
                  <Button component={Link} to="/articles" color="inherit" startIcon={<Star />}>RECOMENDADAS</Button>
              </Box>
              <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                <IconButton component={Link} to="/favorites" sx={{ color: '#ff1744' }}>
                  <Badge badgeContent={favorites.length} color="secondary"><Favorite /></Badge>
                </IconButton>
                <IconButton sx={{ color: '#00e5ff' }}>
                  <Badge badgeContent={cart.length} color="primary"><ShoppingCart /></Badge>
                </IconButton>
                <IconButton component={Link} to="/login" sx={{ color: 'white' }}><AccountCircle /></IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Toolbar /> 

        <Routes>
          {/* INICIO: Solo Banner y Grid Principal */}
          <Route path="/" element={<Box><Banner /><MovieGrid toggleFavorite={toggleFavorite} addToCart={addToCart} favorites={favorites} cart={cart} /></Box>} />
          
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/offers" element={<Offers toggleFavorite={toggleFavorite} addToCart={addToCart} favorites={favorites} cart={cart} />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<Login />} />

          {/* FAVORITOS: Ahora usa tu componente especializado */}
          <Route path="/favorites" element={
            <Favorites 
              favs={favorites} 
              toggleFavorite={toggleFavorite} 
              addToCart={addToCart} 
              cart={cart} 
            />
          } />
        </Routes>

        <Snackbar open={alert.open} autoHideDuration={2000} onClose={() => setAlert({ ...alert, open: false })}>
          <Alert severity={alert.severity} variant="filled" sx={{ width: '100%' }}>{alert.message}</Alert>
        </Snackbar>
      </Box>
    </Router>
  );
}

export default App;