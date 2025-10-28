import { useState, useMemo } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useRecetas } from '../contexts/RecetaContext';
import RecetaCard from './RecetaCard';
import RecetaFiltro from './RecetaFiltro';
import { useNavigate } from 'react-router-dom';

function RecetasList() {
  const navigate = useNavigate();
  const { recetas, isLoading } = useRecetas();

  const handleViewDetails = (id) => {
    navigate(`/recetas/${id}`);
  };

  const [filters, setFilters] = useState({
    searchTerm: '',
    dificultadFilter: 'Todos',
    sortCriteria: 'Ninguno',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const normalizeText = (text) =>
    text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const sortedRecetas = useMemo(() => {
    if (isLoading) return [];

    const { searchTerm, dificultadFilter, sortCriteria } = filters;
    let filtered = recetas || [];
    if (filtered.length === 0) return [];

    filtered = filtered.filter((receta) =>
      normalizeText(receta.titulo).includes(normalizeText(searchTerm))
    );

    filtered = filtered.filter((receta) => {
      if (dificultadFilter === 'Todos') return true;
      return (
        normalizeText(receta.dificultad) === normalizeText(dificultadFilter)
      );
    });

    if (sortCriteria === 'Ninguno') return filtered;

    return [...filtered].sort((a, b) => {
      if (sortCriteria === 'Calificacion_Desc') {
        return b.calificacion - a.calificacion;
      }
      if (sortCriteria === 'Porciones_Desc') {
        return b.porciones - a.porciones;
      }
      return 0;
    });
  }, [filters, recetas, isLoading]);

  return (
    <Box sx={{ py: 4 }}>
      <RecetaFiltro filters={filters} onFilterChange={handleFilterChange} />

      <Grid container spacing={4} alignItems="stretch">
        {sortedRecetas.length > 0 ? (
          sortedRecetas.map((receta) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={receta.id}
              sx={{ display: 'flex' }}
            >
              <RecetaCard receta={receta} onViewDetails={handleViewDetails} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: 'gray', mt: 4 }}
            >
              No se encontraron recetas que coincidan con los filtros.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default RecetasList;