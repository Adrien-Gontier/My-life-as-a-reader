import Title from './components/Title'
import Wishlist from './components/Wishlist';
import './App.css'

export default function App() {
  

  return (
    <BrowserRouter>
      <Title />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Wishlist />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}