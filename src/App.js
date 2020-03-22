import React from 'react';
import ProductList from './component/ProductList';
import Menu from './component/Menu';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Menu />
      </div>
    </HashRouter>
  );
}

export default App;
