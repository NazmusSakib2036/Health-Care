import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './pages/nav';
import Footer from './pages/footer';

import Home from './pages/home';
import DoctorList from './doctor/doctor_view';
import DoctorDetails from './doctor/doctor_details';
import Service from './pages/service';
import Blog from './pages/blog';
import NotFoundPage from './pages/notfound';

import Booking from './pages/booking';
import Contact from './pages/contact';
import Access from './access/access';
import PrivacyPolicy from './pages/privacy_pol';
import TermCondition from './pages/term_con';
import Cookies from './pages/cookies';

import ScrollTop from './pages/scroll';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <ScrollTop />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <DoctorList />
            <Service />
          </>
        } />
        
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Sign-Up" element={<Access />} />

        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-and-Conditions" element={<TermCondition />} />
        <Route path="/Cookies" element={<Cookies />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);