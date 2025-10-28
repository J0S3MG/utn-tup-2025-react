import Navbar from '../components/layout/Navbar';
import { Typography, Container} from '@mui/material';


function RecetaPrincipal() {

  return (
    <Container maxWidth="lg">
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
        Trabajo Practico: React
      </Typography>
      <Typography variant="body1">
        En este proyecto encontrara una vista de Lista de Recetas donde podra filtrar y ordenar, ademas de buscar. 
        Y otra vista de receta donde podras ver toda la preparacion de la receta. 
      </Typography>
      <Navbar />
    </Container>
   
  );
}

export default RecetaPrincipal;