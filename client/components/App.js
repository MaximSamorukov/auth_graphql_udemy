import React from "react";
import Header from './Header.js';

const App = ({ children }) => {
  return (
    <div className="container">
      <Header />
      { children }
    </div>
  )
}

export default App;