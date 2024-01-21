// import FontExPeriment from './Component/FontExPeriment'
import './App.css'
import MainPage from "./Component/CoverPage/MainPage"
import { Routes, Route } from 'react-router-dom';
import About from './Component/CoverPage/About'
import Contact from './Component/CoverPage/Contact';
import Testimonial from './Component/CoverPage/Testimonial';

function App() {
    return (
        <>
            {/* <FontExPeriment/> */}
            {/* Here we Builded a fontExperiment little project :*/}

            {/* ------------------------------------------------------------------------------- */}
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='about' element={<About />} />
                <Route path='testimonial' element={<Testimonial />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
            {/* Landing Page of Resturant */}


        </>
    )
}

export default App

