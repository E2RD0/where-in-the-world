import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AppBody } from './AppBody';
import { Country } from './Country';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<AppBody />} />
      <Route path="countries/:countryCode" element={<Country />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here! 404</p>
        </main>
      }
      />
    </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
