import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import TestPage from './pages/TestPage/TestPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import './App.css'

function App() {
    return (
        <BrowserRouter
            basename={
                import.meta.env.MODE !== 'development' ? '/react-todo' : '/'
            }
        >
            <Routes>
                <Route index element={<HomePage />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/test/:id' element={<TestPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
