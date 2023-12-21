import React from 'react';
import './styles/app.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      {console.log("user", JSON.stringify(user))}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          {/* Widgets */}
        </div>
      )}

    </div>
  );
}

export default App;
