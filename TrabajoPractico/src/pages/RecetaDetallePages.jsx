import { Container, Typography, Button, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom'; 
import Navbar from '../components/layout/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRecetas } from '../contexts/RecetaContext'; 
import RecetaDetalle from '../components/RecetaDetalle';

function RecetaDetallePage() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { getRecetaById, isLoading } = useRecetas(); 

  const receta = getRecetaById(id); 

  if (isLoading) {
    return (
      <Container sx={{ py: 10, color: 'white', display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="primary" />
        <Typography sx={{ ml: 2 }}>Cargando detalles...</Typography>
      </Container>
    );
  }

  if (!receta) {
    return (
      <Container sx={{ py: 4, color: 'white', minHeight: '100vh', textAlign: 'center' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Receta no encontrada.
        </Typography>
        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          color="primary"
        >
          Volver
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 4, color: 'white' }}>
        <RecetaDetalle receta={receta} />
      </Container>
    </Container>
  );
}

export default RecetaDetallePage;