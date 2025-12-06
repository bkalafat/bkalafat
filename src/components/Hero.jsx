import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title animate-fade-in">
                    Software Developer.
                    <br />
                    Product Creator.
                </h1>
                <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    Building high-quality digital products with focus on usability and design.
                </p>
            </div>
        </section>
    );
}
