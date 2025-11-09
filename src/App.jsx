import React from 'react'
import ProjectCards from './components/ProjectCards.jsx'

export default function App() {
    return (
        <main className="container">
            <header className="header">
                <h1>MERN ePortfolio — Project Gallery</h1>
                <p className="subtitle">
                    Example: responsive cards rendered from JSON. Try shrinking the
                    window to see the layout adapt.
                </p>
            </header>

            <ProjectCards />

            <footer className="footer">
                    <p>© {new Date().getFullYear()} Fitzroy Nembhard — CIS 5740 Demo</p>
            </footer>
        </main>
    )
}
