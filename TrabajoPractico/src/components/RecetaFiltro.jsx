import { TextField, Stack, ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import WhatshotIcon from "@mui/icons-material/Whatshot"; 
import StarIcon from '@mui/icons-material/Star'; 
import PeopleIcon from '@mui/icons-material/People';

function RecetaFiltro({ filters, onFilterChange }) {

  //Evento para manejar el cambio de DIFICULTAD.
  const handleDificultadChange = (event, value) => {
    const newValue = value === null ? 'Todos' : value;
    onFilterChange({ ...filters, dificultadFilter: newValue });
  };
  
  //Evento para manejar el cambio de ORDENAMIENTO.
  const handleSortChange = (event, value) => {
    const newCriteria = value === null ? 'Ninguno' : value;
    onFilterChange({ ...filters, sortCriteria: newCriteria });
  };

  return ( //Devolvemos el buscador y sus filtros (Estos son los que disparan los eventos en RecetasList). 
    <Stack 
      direction={{ xs: 'column', sm: 'row' }} 
      spacing={2} 
      sx={{ mb: 4, justifyContent: 'center', alignItems: 'center' }}
    >
      {/* Barra de Búsqueda */}
      <TextField
        name="searchTerm"
        label="Buscar Recetas..."
        variant="outlined"
        value={filters.searchTerm}
        onChange={(e) => onFilterChange({ ...filters, searchTerm: e.target.value })}
        InputProps={{
          startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
          style: { color: 'white' }
        }}
        sx={{ 
          minWidth: 250, 
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'gray' },
            '&:hover fieldset': { borderColor: 'white' }
          },
          '& .MuiInputLabel-root': { color: 'gray' }
        }}
      />
      
      <Tooltip title="Filtrar por Dificultad" placement="top"> {/*Botones de dificultades*/}
          <ToggleButtonGroup
            name="dificultadFilter"
            value={filters.dificultadFilter}
            exclusive 
            onChange={handleDificultadChange}
            size="large"
            sx={{ border: '1px solid gray' }}
          >
            <ToggleButton 
                value="Todos" 
                aria-label="Todos" 
                sx={{ color: filters.dificultadFilter === 'Todos' ? 'primary.main' : 'white' }}
            >
                Todos
            </ToggleButton>
            
            <ToggleButton value="Facil" aria-label="Fácil">
              <EmojiEmotionsIcon sx={{ color: 'success.main' }} />
            </ToggleButton>

            <ToggleButton value="Medio" aria-label="Medio">
              <SentimentNeutralIcon sx={{ color: 'warning.main' }} />
            </ToggleButton>
            
            <ToggleButton value="Dificil" aria-label="Difícil">
              <WhatshotIcon sx={{ color: 'error.main' }} />
            </ToggleButton>
          </ToggleButtonGroup>
          
      </Tooltip>

      <Tooltip title="Ordenar por (Mayor a Menor)" placement="top"> {/*Botones de Ordenamiento*/}
        <ToggleButtonGroup
            name="sortCriteria"
            value={filters.sortCriteria === 'Ninguno' ? null : filters.sortCriteria} 
            exclusive
            onChange={handleSortChange}
            size="large"
            sx={{ border: '1px solid gray' }}
        >
            <ToggleButton value="Calificacion_Desc" aria-label="Ordenar por Calificación">
                <StarIcon sx={{ color: 'gold' }} />
            </ToggleButton>

            <ToggleButton value="Porciones_Desc" aria-label="Ordenar por Porciones">
                <PeopleIcon color="primary" />
            </ToggleButton>
        </ToggleButtonGroup>
      </Tooltip>
      
    </Stack>
  );
}

export default RecetaFiltro;