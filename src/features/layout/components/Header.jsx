import { AppBar, Toolbar, Typography, InputBase, Box, Badge, IconButton, Button } from "@mui/material";
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon, MovieFilter, Favorite, CellTower } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Header({ onSearchChange, cartCount, favCount, isOnline }) {
  // Estilo base para los botones del menú
  const linkStyle = { 
    color: 'white', 
    textDecoration: 'none', 
    fontWeight: 'bold',
    fontSize: '0.9rem'
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#000", borderBottom: "2px solid #7c1fa2" }}>
      <Toolbar sx={{ justifyContent: "space-between", height: '70px' }}>
        
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <MovieFilter sx={{ color: "#7c1fa2", mr: 1, fontSize: 30 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>FOREVER</Typography>
        </Link>

        {/* NAVEGACIÓN - Estilo manual para evitar errores de Material UI */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Link to="/" style={linkStyle}>INICIO</Link>
          <Link to="/series" style={linkStyle}>SERIES</Link>
          <Link to="/ofertas" style={{ ...linkStyle, color: 'gold' }}>OFERTAS</Link>
          <Link to="/hooks" style={linkStyle}>HOOKS</Link>
        </Box>

        {/* HOOKS Y ESTADOS */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          
          {/* Indicador Online manual */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            border: `1px solid ${isOnline ? '#4caf50' : '#f44336'}`,
            borderRadius: '15px',
            px: 1,
            py: 0.5
          }}>
            <CellTower sx={{ color: isOnline ? '#4caf50' : '#f44336', fontSize: 18 }} />
            <Typography sx={{ color: 'white', fontSize: '0.7rem' }}>
              {isOnline ? "ON" : "OFF"}
            </Typography>
          </Box>

          {/* Favoritos */}
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={favCount || 0} color="error">
              <Favorite />
            </Badge>
          </IconButton>

          {/* Carrito */}
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={cartCount || 0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Button variant="contained" sx={{ backgroundColor: '#7c1fa2', borderRadius: '20px', fontSize: '0.7rem' }}>
            LOGIN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}