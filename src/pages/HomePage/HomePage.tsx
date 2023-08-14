import { NavLink } from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>HomePage</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>AboutPage</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
