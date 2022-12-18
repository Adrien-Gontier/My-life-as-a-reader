import Title from './components/Title'
import Wishlist from './routes/Wishlist';
import './App.css'
import PileToRead from './routes/PileToRead';
import ReadingInProgress from './routes/ReadingInProgress';
import ReadingFinished from './routes/ReadingFinished';
import WhoAmI from './routes/WhoAmI';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import React from 'react';
import BooksList from './assets/books.json';
import { useState } from 'react';
import BookDataContext from './context/BookDataContext';
import MapOfTheWebsite from './routes/MapOfTheWebsite';

export default function App() {


  const [bookData, setBookData] = useState(BooksList)

  // TODO : Set Axios


  return (
    <BrowserRouter>
      <BookDataContext.Provider value={{ bookData, setBookData }}>
        <Title />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/piletoread" element={<PileToRead />} />
          <Route path="/readinginprogress" element={<ReadingInProgress />} />
          <Route path="/readingfinished" element={<ReadingFinished />} />
          <Route path="/whoami" element={<WhoAmI />} />
          <Route path="/mapofthewebsite" element={<MapOfTheWebsite />} />
        </Routes>
        <Footer />
      </BookDataContext.Provider>
    </BrowserRouter>
  )
}

// TODO : test my code!!