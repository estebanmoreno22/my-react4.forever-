import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import movieData from "../../../shared/data.json";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movieData.find((m) => m.id === parseInt(id));

  if (!movie) return (
    <Container sx={{ py: 10, textAlign: 'center' }}>
      <Typography color="white" variant="h4">Película no encontrada</Typography>
      <Button onClick={() => navigate("/")} sx={{ mt: 2, color: "#9c27b0" }}>Volver al inicio</Button>
    </Container>
  );

  return (
    <Container sx={{ py: 5, color: "white" }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate("/")} 
        sx={{ color: "white", mb: 3, '&:hover': { color: '#9c27b0' } }}
      >
        Volver al catálogo
      </Button>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
        
        {/* LADO IZQUIERDO: REPRODUCTOR DE VIDEO */}
        <Box sx={{ flex: 1.5 }}>
          <Box sx={{ 
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden', 
            borderRadius: 2, 
            boxShadow: "0px 10px 40px rgba(156, 39, 176, 0.3)" 
          }}>
            <iframe
              src={movie.video}
              title={`Trailer de ${movie.titulo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            ></iframe>
          </Box>
        </Box>

        {/* LADO DERECHO: INFORMACIÓN */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography variant="overline" sx={{ color: "#9c27b0", fontWeight: "bold", fontSize: '1.1rem' }}>
            {movie.categoria}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            {movie.titulo}
          </Typography>
          
          <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 4, color: "#ccc", lineHeight: 1.8 }}>
            Disfruta de lo mejor del cine en Forever Movie Store. Compra ahora y recibe acceso inmediato a {movie.titulo} en alta definición. Una historia que te mantendrá al borde del asiento.
          </Typography>

          <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold', color: 'white' }}>
            ${movie.precio}
          </Typography>
          
          <Button 
            variant="contained" 
            fullWidth 
            sx={{ 
              backgroundColor: "#7c1fa2", 
              py: 2, 
              fontSize: '1.1rem',
              fontWeight: "bold",
              borderRadius: '8px',
              "&:hover": { backgroundColor: "#9c27b0", transform: 'scale(1.02)' },
              transition: '0.3s'
            }}
          >
            COMPRAR AHORA
          </Button>
        </Box>
      </Box>
    </Container>
  );
}