import React, { useEffect, useState } from 'react'

// helper to fetch local JSON (Vite will serve it as a static asset)
async function loadProjects() {
    const res = await fetch('/src/data/projects.json')
    if (!res.ok) throw new Error('Failed to load projects.json')
    return res.json()
}

function ProjectCard({ project }) {
    const { title, description, image, tech, demoUrl, repoUrl } = project
    return (
        <article className="card" tabIndex="0">
            <div className="media">
                <img src={image} alt={`${title} cover`} loading="lazy" />
            </div>

            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>

                <div className="badges" aria-label="Technologies used">
                    {tech.map((t, i) => (
                        <span className="badge" key={i}>{t}</span>
                    ))}
                </div>

                <div className="actions">
                    <a className="btn" href={demoUrl} target="_blank" rel="noreferrer">Live Demo</a>
                    <a className="btn btn-secondary" href={repoUrl} target="_blank" rel="noreferrer">View Repo</a>
                </div>
            </div>
        </article>
    )
}

export default function ProjectCards() {
    const [projects, setProjects] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        loadProjects().then(setProjects).catch(err => setError(err.message))
    }, [])

    if (error) return <p className="error">Error: {error}</p>
    if (!projects.length) return <p>Loading projects…</p>

    return (
        <section aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">Projects</h2>
            <div className="grid">
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    )
}

