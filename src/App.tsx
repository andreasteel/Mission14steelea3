import React from 'react';
import './App.css';
import Navbar from './NavBar';
import TopBanner from './Blah';
import HomeInfo from './Home';
import MovieList from './Movies';
import { Link, Route, Routes } from 'react-router-dom';
import PodcastInfo from './Podcasts';
import styled from 'styled-components';
import './styles.css';

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: '1rem',
  textDecoration: 'none',
  color: 'blue',
};

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
