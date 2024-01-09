import { useState } from 'react';
import styles from "./App.module.scss";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>ADMIN</h1>
      <Outlet />
    </div>
  )
};

export default App;
