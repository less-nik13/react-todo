import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Button/Button'

export default function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>HomePage</h1>
            <Button onClick={() => setCount(prev => prev + 1)}>Click me</Button>
            <h1>Count: {count}</h1>
            <h2>{import.meta.env.MODE}</h2>
            <h3>{import.meta.env.VITE_CLIENT_ID}</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>HomePage</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>AboutPage</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/test/1'}>TestPage</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
