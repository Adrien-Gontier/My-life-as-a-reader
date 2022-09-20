import Title from './components/Title'

import './App.css'

export default function App() {
  

  return (
    <BrowserRouter>
      <Title />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}