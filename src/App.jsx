import Title from './components/Title'
import Wishlist from './components/Wishlist';
import './App.css'
import PileToRead from './components/PileToRead';
import ReadingInProgress from './components/ReadingInProgress';
import ReadingFinished from './components/ReadingFinished';
import WhoAmI from './components/WhoAmI';
import Footer from './components/Footer';

export default function App() {
  

  return (
    <BrowserRouter>
      <Title />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/wishlist" element={<Wishlist  />} />
        <Route path="/piletoread" element={<PileToRead  />} />
        <Route path="/readinginprogress" element={<ReadingInProgress />} />
        <Route path="/readingfinished" element={<ReadingFinished />} />
        <Route path="/whoami" element={<WhoAmI />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

// TODO : test my code!!