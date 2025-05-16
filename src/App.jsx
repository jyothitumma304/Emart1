import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Auth
import { AuthProvider } from './stores/auth/AuthContext';
import SignIn from './stores/auth/SignIn';
import SignUp from './stores/auth/SignUp';

// Pages
import LandingPage from './stores/pages/LandingPage';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchPage from './stores/pages/WatchPage';
import MenPage from './stores/pages/MenPage';
import WomenPage from './stores/pages/WomenPage';
import FurniturePage from './stores/pages/FurniturePage';
import FridgePage from './stores/pages/FridgePage';
import BookPage from './stores/pages/BookPage';
import SpeakerPage from './stores/pages/SpeakerPage';
import TvPage from './stores/pages/TvPage';
import AcPage from './stores/pages/AcPage';
import UserCart from "./stores/UserCart.jsx";

// Singles
import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';
import WatchSingle from './singles/WatchSingle';
import MenSingle from './singles/MenSingle';
import WomenSingle from './singles/WomenSingle';
import TvSingle from './singles/TvSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import FridgeSingle from './singles/FridgeSingle';
import BookSingle from './singles/BookSingle';
import SpeakerSingle from './singles/SpeakerSingle';
import AcSingle from './singles/Acsingle';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Routes>
          {/* Public Pages */}
          <Route path='/abc' element={<LandingPage />} />
          <Route path='category/mobiles' element={<MobilePage />} />
          <Route path='category/Computers' element={<ComputerPage />} />
          <Route path='category/Watches' element={<WatchPage />} />
          <Route path='category/Mens Wear' element={<MenPage />} />
          <Route path='category/Woman Wear' element={<WomenPage />} />
          <Route path='category/Furniture' element={<FurniturePage />} />
          <Route path='category/Fridge' element={<FridgePage />} />
          <Route path='category/Books' element={<BookPage />} />
          <Route path='category/Speakers' element={<SpeakerPage />} />
          <Route path='category/TV' element={<TvPage />} />
          <Route path='category/AC' element={<AcPage />} />

          {/* Product Single Views */}
          <Route path='/mobiles/:id' element={<MobileSingle />} />
          <Route path='/computers/:id' element={<ComputerSingle />} />
          <Route path='/Watches/:id' element={<WatchSingle />} />
          <Route path='/Mens Wear/:id' element={<MenSingle />} />
          <Route path='/Woman Wear/:id' element={<WomenSingle />} />
          <Route path='/TV/:id' element={<TvSingle />} />
          <Route path='/Furniture/:id' element={<FurnitureSingle />} />
          <Route path='/Fridge/:id' element={<FridgeSingle />} />
          <Route path='/Books/:id' element={<BookSingle />} />
          <Route path='/Speakers/:id' element={<SpeakerSingle />} />
          <Route path='/AC/:id' element={<AcSingle />} />

          {/* Auth Pages */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Cart Page */}
          <Route path="/cart" element={<UserCart />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
