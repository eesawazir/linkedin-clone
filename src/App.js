import React from 'react';
import './styles/app.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app__body">
        <SideBar />
        <Feed />
        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
