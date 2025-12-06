import './ProjectCard.css';

export default function ProjectCard({ title, description, url, icon, size = 'medium', className = '' }) {
    const Component = url ? 'a' : 'div';

    return (
        <Component
            href={url}
            className={`project-card ${size} ${className}`}
            target={url ? "_blank" : undefined}
            rel={url ? "noopener noreferrer" : undefined}
        >
            <div className="card-content">
                <div className="card-top">
                    {icon && <span className="card-icon">{icon}</span>}
                    <div className="card-arrow">↗</div>
                </div>
                <div className="card-bottom">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-desc">{description}</p>
                </div>
            </div>
        </Component>
    );
}
