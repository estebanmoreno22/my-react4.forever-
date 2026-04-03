import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import MovieCard from './MovieCard'; 

export const Favorites = ({ favs, toggleFavorite, addToCart, cart }) => {
    return (
        <Box sx={{ 
            p: { xs: 2, md: 5 }, 
            mt: 8, 
            bgcolor: '#000', 
            minHeight: '100vh', 
            color: 'white' 
        }}>
            <Container maxWidth="xl">
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2, 
                    mb: 5,
                    borderBottom: '1px solid #333',
                    pb: 2 
                }}>
                    <Favorite sx={{ color: '#ff1744', fontSize: 40 }} />
                    <Typography variant="h3" sx={{ 
                        fontWeight: 900, 
                        background: 'linear-gradient(45deg, #00e5ff 30%, #7c1fa2 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        MIS PELÍCULAS FAVORITAS
                    </Typography>
                </Box>

                {favs.length === 0 ? (
                    <Box sx={{ textAlign: 'center', mt: 10 }}>
                        <Typography variant="h5" sx={{ color: '#444', fontWeight: 'bold' }}>
                            TU LISTA ESTÁ VACÍA
                        </Typography>
                    </Box>
                ) : (
                    <Grid container spacing={3}>
                        {favs.map((movie) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                                <MovieCard 
                                    movie={movie}
                                    toggleFavorite={toggleFavorite}
                                    addToCart={addToCart}
                                    isFavorite={true} 
                                    isInCart={cart.some(c => c.id === movie.id)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
};