import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Button from './components/Button/Button'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Button onClick={() => setCount(prev => prev + 1)}>Click me</Button>
            <h1>Count: {count}</h1>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />}></Route>
                    <Route path='/about' element={<AboutPage />}></Route>
                    <Route path='*' element={<NotFoundPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
