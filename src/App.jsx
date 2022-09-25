import Title from './components/Title'
import Wishlist from './components/Wishlist';
import './App.css'
import PileToRead from './components/PileToRead';
import ReadingInProgress from './components/ReadingInProgress';
import ReadingFinished from './components/ReadingFinished';

export default function App() {
  

  return (
    <BrowserRouter>
      <Title />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Wishlist path="/wishlist" />
        <PileToRead path="piletoread" />
        <ReadingInProgress path="/readinginprogress" />
        <ReadingFinished path="readingfinished" />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}