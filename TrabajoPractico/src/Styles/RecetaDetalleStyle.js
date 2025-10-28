export const styles = {
  container: {
    pt: 4,
    color: 'white',
  },
  headerBox: (imagen) => ({
    height: 400,
    backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.8)), url(${imagen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 2,
    mb: 4,
    display: 'flex',
    alignItems: 'flex-end',
    p: 4,
  }),
  title: {
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  descripcion: {
    mb: 4,
    color: 'lightgray',
    fontStyle: 'italic',
  },
  detallesBox: {
    p: 2,
    bgcolor: '#222',
    borderRadius: 1,
    mb: 4,
  },
  detallesTitulo: {
    color: 'primary.main',
  },
  detallesStack: {
    color: 'white',
    mt: 1,
  },
  ingredienteTitulo: {
    fontWeight: 'bold',
    borderBottom: '2px solid',
    borderColor: 'primary.main',
    pb: 1,
    mb: 3,
  },
  pasoTitulo: {
    fontWeight: 'bold',
    borderBottom: '2px solid',
    borderColor: 'primary.main',
    pb: 1,
    mb: 3,
  },
  listItemIngrediente: {
    borderBottom: '1px dotted #333',
  },
  pasoItem: {
    mb: 2,
    p: 0,
  },
  pasoNumero: {
    color: 'primary.light',
    mb: 0.5,
  },
  textoBlanco: {
    color: 'white',
  },
  textoGris: {
    color: 'gray',
  },
};