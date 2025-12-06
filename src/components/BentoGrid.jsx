import ProjectCard from './ProjectCard';
import './BentoGrid.css';

export default function BentoGrid() {
    return (
        <section className="bento-section">
            <div className="bento-grid">
                {/* Large Feature: DiffHub */}
                <ProjectCard
                    title="DiffHub"
                    description="Specialized tool for tracking code differences and version control insights."
                    url="https://diffhub.bkalafat.com"
                    icon="⚡"
                    size="large"
                />

                {/* Medium: TechNews */}
                <ProjectCard
                    title="TechNews"
                    description="Curated AI-analyzed technology news."
                    url="https://technews.bkalafat.com"
                    icon="📰"
                    size="medium"
                />

                {/* Medium: CV/Resume */}
                <ProjectCard
                    title="Resume"
                    description="My professional background."
                    url="https://cv.bkalafat.com"
                    icon="💼"
                    size="medium"
                />

                {/* Small: GitHub */}
                <ProjectCard
                    title="GitHub"
                    description="@bkalafat"
                    url="https://github.com/bkalafat"
                    icon="🐙"
                    size="medium"
                />

                {/* Medium: LinkedIn */}
                <ProjectCard
                    title="LinkedIn"
                    description="Let's connect."
                    url="https://linkedin.com/in/bkalafat"
                    icon="🔗"
                    size="medium"
                />

                {/* Placeholder for fun/status */}
                <div className="project-card medium status-card">
                    <div className="status-indicator">
                        <span className="dot"></span>
                        <span className="text">Available for work</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
