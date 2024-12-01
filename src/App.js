import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
