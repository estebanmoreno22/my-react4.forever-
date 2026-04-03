import { Box, Typography, Container, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0d0d0d", color: "white", py: 6, mt: 8, borderTop: "1px solid #333" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#9c27b0", mb: 2 }}>
              FOREVER
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              Tu plataforma definitiva para el streaming y catálogo de las mejores películas del cine mundial.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>Enlaces</Typography>
            <Typography variant="body2" sx={{ cursor: "pointer", mb: 1 }}>Inicio</Typography>
            <Typography variant="body2" sx={{ cursor: "pointer", mb: 1 }}>Películas</Typography>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>Ofertas</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>Contacto</Typography>
            <Typography variant="body2" sx={{ color: "#00e5ff" }}>soporte@forever.com</Typography>
            <Typography variant="body2">Medellín, Colombia</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ textAlign: "center", mt: 4, color: "#555" }}>
          © 2026 Forever - Todos los derechos reservados
        </Typography>
      </Container>
    </Box>
  );
}