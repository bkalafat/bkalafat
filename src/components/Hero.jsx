import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <p className="hero-greeting animate-fade-in mono">Hi, my name is</p>
                <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <span className="accent">Burak Kalafat.</span>
                    <br />
                    I build digital products.
                </h1>
                <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Software Developer & Product Creator focused on building high-quality,
                    user-centric applications and tools.
                </p>
            </div>
        </section>
    );
}
