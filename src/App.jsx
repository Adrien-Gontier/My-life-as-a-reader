import Title from './components/Title'
import Wishlist from './pages/Wishlist'
import './assets/sass/App.css'
import PileToRead from './pages/PileToRead'
import ReadingInProgress from './pages/ReadingInProgress'
import ReadingFinished from './pages/ReadingFinished'
import WhoAmI from './pages/WhoAmI'
import Footer from './components/Footer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import React from 'react'
import MapOfTheWebsite from './pages/MapOfTheWebsite'

export default function App() {
    return (
        <BrowserRouter>
            <Title />
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/piletoread" element={<PileToRead />} />
                <Route
                    path="/readinginprogress"
                    element={<ReadingInProgress />}
                />
                <Route path="/readingfinished" element={<ReadingFinished />} />
                <Route path="/whoami" element={<WhoAmI />} />
                <Route path="/mapofthewebsite" element={<MapOfTheWebsite />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

// TODO : test my code!!
