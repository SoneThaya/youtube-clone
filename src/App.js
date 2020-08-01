import React from 'react';
import './App.css';
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import RecommendedVideos from './component/RecommendedVideos'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
