import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { DoctorsPage } from './pages/DoctorsPage';
import { NursesPage } from './pages/NursesPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/doctors" replace />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/nurses" element={<NursesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;