import React from 'react';
import './App.css';
import Navbar from '../NavBar';
import HomeInfo from '../Home';
import MovieList from '../movie/MovieList';
import { Route, Routes } from 'react-router-dom';
import PodcastInfo from '../Podcasts';
import '../styles.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeInfo />} />
          <Route path="/podcasts" element={<PodcastInfo />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
