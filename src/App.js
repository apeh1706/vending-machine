// import React from 'react';
// import ProductList from './views/ProductList';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Vending Machine</h1>
//       <ProductList />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import './styles/App.css';

const App = () => (
  <div className="App">
    <h1>Vending Machine</h1>
    <ProductList />
  </div>
);

export default App;
