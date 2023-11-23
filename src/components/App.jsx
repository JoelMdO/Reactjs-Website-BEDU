import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/general/App.css'
import PermitsPage from './screens/permits_page';
import Home from './screens/home';
import LoginPage from './screens/login_page';
import SignUpPage from './screens/signup_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/permits" element={<PermitsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
