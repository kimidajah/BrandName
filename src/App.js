import React from 'react';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="container mt-3">
        <h1>Welcome to My Website</h1>
        <p>This is a simple page with a Bootstrap navbar.</p>
      </div>
    </div>
  );
}

export default App;
