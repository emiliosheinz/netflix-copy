import React from 'react';
import './App.css';
import { Header } from './components';
import { ProfilesHome } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <ProfilesHome />
    </div>
  );
}

export default App;
