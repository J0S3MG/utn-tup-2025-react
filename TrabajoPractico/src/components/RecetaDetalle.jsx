import { Box, Typography, Grid, List, ListItem, ListItemText, Stack, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import IndicadorDificultad from '../components/IndicadorDificultad'; 
import { styles } from '../Styles/RecetaDetalleStyle';

function RecetaDetalle({ receta }) {
  return (
    <>
      {/* Encabezado */}
      <Box sx={styles.headerBox(receta.imagen)}>
        <Typography variant="h2" component="h1" sx={styles.title}>
          {receta.titulo}
        </Typography>
      </Box>

      {/* Descripción */}
      <Typography variant="body1" sx={styles.descripcion}>
        {receta.descripcion}
      </Typography>

      {/* Detalles clave */}
      <Box sx={styles.detallesBox}>
        <Typography variant="h6" gutterBottom sx={styles.detallesTitulo}>
          Detalles Clave
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          divider={<Divider orientation="vertical" flexItem />}
          sx={styles.detallesStack}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <AccessTimeIcon color="action" />
            <Typography variant="body1">
              Tiempo: {receta.tiempoPreparacion}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PeopleIcon color="action" />
            <Typography variant="body1">
              Porciones: {receta.porciones}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <IndicadorDificultad dif={receta.dificultad} />
          </Stack>
        </Stack>
      </Box>

      {/* Grillas principales */}
      <Grid container spacing={5}>
        {/* Ingredientes */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={styles.ingredienteTitulo}
          >
            Ingredientes
          </Typography>
          <List sx={styles.textoBlanco}>
            {receta.ingredientes.map((ingrediente, index) => (
              <ListItem key={index} sx={styles.listItemIngrediente}>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={styles.textoBlanco}>
                      {ingrediente.nombre}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={styles.textoGris}>
                      {`${ingrediente.cantidad} ${ingrediente.unidad}`}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Pasos */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            gutterBottom
            sx={styles.pasoTitulo}
          >
            Proceso de Preparación
          </Typography>
          <List sx={styles.textoBlanco}>
            {receta.pasos.map((paso, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                sx={styles.pasoItem}
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={styles.pasoNumero}>
                      {`Paso ${index + 1}`}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body1" sx={styles.textoBlanco}>
                      {paso}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default RecetaDetalle;