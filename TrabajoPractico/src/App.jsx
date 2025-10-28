import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecetasListPage from './pages/RecetasListPages';
import RecetaDetallePage from './pages/RecetaDetallePages';
import RecetaPrincipal from './pages/RecetaPrincipal';
import { RecetaProvider } from './contexts/RecetaContext';
import { ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { darkTheme, lightTheme } from './Styles/theme';
import { useState } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';

function App() {
  // Estado del modo: true = oscuro, false = claro
  const [modoOscuro, setModoOscuro] = useState(true);

  const toggleTheme = () => setModoOscuro(!modoOscuro);

  return (
    <ThemeProvider theme={modoOscuro ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <RecetaProvider>
          <Routes>
            <Route path="/" element={<RecetaPrincipal />} />
            <Route path="/recetas" element={<RecetasListPage />} />
            <Route path="/recetas/:id" element={<RecetaDetallePage />} />
          </Routes>
        </RecetaProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;