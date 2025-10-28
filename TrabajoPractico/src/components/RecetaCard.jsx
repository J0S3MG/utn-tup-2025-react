import { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Stack, Typography, Button, Chip, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import PeopleIcon from '@mui/icons-material/People';
import IndicadorDificultad from './IndicadorDificultad';
                       
//Le pasamos la receta para que la organice.    
function RecetaCard({receta, onViewDetails}) {
  // Estado para manejar la calificación seleccionada.
  const [valorCalificacion, setValorCalificacion] = useState(0);

  return ( //Tamaño de la tarjeta.
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 4
      }
    }}>

      <CardMedia  //Imagen de la tarjeta.
        component="img"
        height="200"
        image={receta.imagen}
        alt="Foto de la receta"
        sx={{ objectFit: 'cover' }}
      />
      
      <CardHeader //Titulo de la tarjeta.
        title={receta.titulo}
        titleTypographyProps={{
          align: "center",
          variant: "h6",
        }}
      />

      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <IndicadorDificultad dif={receta.dificultad} />{/*Indica la dificultad */}

          <PeopleIcon fontSize="small" color='action'/> {/* Indico la cantidad de porciones*/}
          <Typography variant="body2" color="text.secondary"> 
           {receta.porciones}
          </Typography>

          <Chip //Para el tiempo de preparacion
            icon={<AccessTime />} 
            label={receta.tiempoPreparacion}
            variant="outlined"
          />
        </Stack>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary"> {/* Para la calificacion*/}
            Calificaciones:
          </Typography>
          <Rating
            name="calificacion-receta"
            value={receta.calificacion}
            onChange={(event, newValue) => setValorCalificacion(newValue)}
            precision={0.5}
          />
        </Stack>
      </CardContent>
      
      <CardActions> {/* Para ir a la receta*/}
        <Button 
            size="small" 
            variant="contained" 
            fullWidth 
            onClick={() => onViewDetails(receta.id)}
        >
          Ver Preparación
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecetaCard;
