import Navbar from '../components/layout/Navbar';
import RecetasList from '../components/RecetasList';
import { Typography, Container, CircularProgress } from '@mui/material';
import { useRecetas } from '../contexts/RecetaContext';

function RecetasListPage() {
  const { isLoading } = useRecetas();

  if (isLoading) {
    return (
      <Container
        sx={{
          py: 10,
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <CircularProgress color="primary" />
        <Typography sx={{ ml: 2 }}>Cargando recetas...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Navbar />

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Recetas Destacadas
      </Typography>

      <Container maxWidth="lg">
        <RecetasList />
      </Container>
    </Container>
  );
}

export default RecetasListPage;