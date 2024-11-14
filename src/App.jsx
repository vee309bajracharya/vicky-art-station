import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import {lazy, Suspense} from 'react';
import Loader from './components/Loader'
import PageNotFound from './components/PageNotFound';
const Home = lazy(()=> import('./pages/Home'));
const About = lazy(()=> import('./pages/About'));
const Contact = lazy(()=> import('./pages/Contact'));
const Services = lazy(()=> import('./pages/Services'));
const ServicesDetail = lazy(()=> import('./pages/ServicesDetail'));
const Faq = lazy(()=> import('./pages/Faq'));


const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
      <Routes>

        {/* Page routes */}
        <Route path='/' element={<Home />} />        
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element={<Faq/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceName" element={<ServicesDetail />} />

        {/* unknown route */}
        <Route path='*' element={<PageNotFound/>} />

      </Routes>  
      </Suspense>  
    
    
    </BrowserRouter>
  )
}

export default App