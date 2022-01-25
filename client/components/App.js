import React from "react";
import Header from './Header.js';

const App = (props) => {
  const { children, location: { pathname } } = props;

  return (
    <div className="container">
      <Header />
      { pathname === '/' && <h3>Welcome!</h3>}
      { children }
    </div>
  )
}

export default App;