import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">© {currentYear} Burak Kalafat. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/bkalafat" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                    <a href="https://linkedin.com/in/bkalafat" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                    <a href="mailto:contact@bkalafat.com" className="social-link">Contact</a>
                </div>
            </div>
        </footer>
    );
}
