import React from 'react';
import AuthContextProvider from './context/AuthContext';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>

      <AuthContextProvider>

      <AppRouter/>

      </AuthContextProvider>

     
    </div>
  );
}

export default App;
