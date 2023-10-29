import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Header from './components/header/Header';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import New from './pages/News/New';
import Home from './pages/Home/Home';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
