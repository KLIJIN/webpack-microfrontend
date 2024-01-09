import { useState } from 'react';
import styles from "./App.module.scss";

function App() {
  const [value, setValue] = useState('')
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
};

export default App;
