import ProjectCard from './ProjectCard';
import './ProjectHub.css';

export default function ProjectHub() {
    const projects = [
        {
            title: 'DiffHub',
            description: 'A specialized tool for tracking code differences and version control insights.',
            url: 'https://diffhub.bkalafat.com',
            badge: 'DevTool',
        },
        {
            title: 'TechNews',
            description: 'Curated technology news aggregator powered by AI summaries.',
            url: 'https://technews.bkalafat.com',
            badge: 'News',
        },
        {
            title: 'Resume / CV',
            description: 'My professional journey, skills, and experience in software development.',
            url: 'https://cv.bkalafat.com',
            badge: 'Portfolio',
        },
        {
            title: 'AI Playground',
            description: 'Experimental AI tools and prototypes built with the latest models.',
            url: '#',
            badge: 'Coming Soon',
        },
    ];

    return (
        <section className="project-hub">
            <div className="hub-container">
                <h2 className="section-title">Explore My Work</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
