import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './styles/index.css';
import './styles/Home.css';
import { ModoOscuroProvider } from './components/ModoOscuroContext.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Loginregister } from './pages/Loginregister.jsx';
import { Home } from './pages/Home.jsx';
import { Userio } from './pages/User.jsx';
import { Game } from './pages/Game.jsx';
import{ Admin } from './pages/Admin.jsx'

const esAutenticado = () => {
  const token = JSON.parse(localStorage.getItem('info'));
  return !!token;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModoOscuroProvider>
      <BrowserRouter>
        <Routes>
        {
            /*--------------RUTAS PUBLICAS--------------------------------------- */
          }
          <Route path="/" element={<Loginregister />} />
          {
            /*--------------RUTAS PRIVADAS--------------------------------------- */
          }

          {esAutenticado() ? (
            <>
              <Route path="/Home" element={<Home />} />
              <Route path="/User" element={<Userio />} />
              <Route path="/Game" element={<Game />} />
              <Route path='/Admin' element={<Admin/>}/>
            </>
          ) : (
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </ModoOscuroProvider>
  </React.StrictMode>
);

