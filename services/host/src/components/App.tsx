import React, { useState } from 'react';
import styles from "./App.module.scss";
import { Link, Outlet } from 'react-router-dom';
  
// @ts-ignore
const PanelComp = React.lazy(() => import("panel/Panel"));

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      App HOST
      <div className={styles.red}>
        <PanelComp />
        <span >{count}</span>
      </div>
      <button onClick={() => setCount(count + 1)}>
        plus
      </button>
      <div>
        <div>
          <Link to={'/'}>на базу</Link>
        </div>
        <div>
          <Link to={'/admin'}>admin</Link>
        </div>
        <div>
          <Link to={'/shop'}>shop</Link>
        </div>
        <div>
          <Link to={'/olol'}>olol</Link>
        </div>
      </div>
      <div>-------------------ниже встраиваемый модуль---------------------------</div>
      <Outlet />
      <div>----------------------------------------------</div>
    </div>
  )
};

export default App;
