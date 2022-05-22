import React, { useState, useEffect } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Helmet } from "react-helmet";
import AppRouter from './routers/AppRouter';
import AuthProvider from "./auth/AuthProvider";


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dogect</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="El administrador de tareas" />
      </Helmet>

      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
