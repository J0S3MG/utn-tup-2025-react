import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Detecta la ruta actual

  const irInicio = () => navigate('/');
  const irRecetas = () => navigate('/recetas');
  const volverAtras = () => navigate(-1);

  // Rutas actuales
  const ruta = location.pathname;

  return (
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      {/* Si estamos en el inicio ("/") -> solo mostrar "Ir a Lista de Recetas" */}
      {ruta === '/' && (
        <button onClick={irRecetas}>Ir a Lista de Recetas</button>
      )}

      {/* Si estamos en "/recetas" -> solo mostrar "Volver a Menú" */}
      {ruta === '/recetas' && (
        <button onClick={irInicio}>Volver a Menú</button>
      )}

      {/* Si estamos en una receta detallada -> "/recetas/:id" */}
      {ruta.startsWith('/recetas/') && ruta !== '/recetas' && (
        <button onClick={volverAtras}>Volver Atrás</button>
      )}
    </div>
  );
}

export default Navbar;