import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import Principal from './pages/principal/Principal';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/cadastro"  element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/principal" element={<Principal />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
