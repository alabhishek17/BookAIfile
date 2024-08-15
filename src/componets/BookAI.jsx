
// import './BookAI.css';
import "./BookAI.css"
const BookAI = () => {
    return (
        <div className="bookai-container">
            <header className="header">
                <div className="logo">
                    <span className="logo-circle"></span>
                    <span className="logo-text">BookAI</span>
                </div>
                <nav className="navigation">
                    <a href="#">Features</a>
                    <a href="#">How It Works</a>
                    <a href="#">Roadmap</a>
                    <a href="#">API</a>
                    <a href="#">Price</a>
                    <a href="#">Models</a>
                    <button className="login-button">Login / Sign Up</button>
                </nav>
            </header>
            <main className="main-content">
                <h1>
                    Explore the Possibilities of <span className="highlight">AI Book Writing</span> with BookAI
                </h1>
                <p className="description">
                    Unleash the power of AI to create captivating books in minutes. 
                    Download, Distribute wherever you want. Generate unlimited free books
                </p>
                <div className="cta-buttons">
                    <button className="get-started">Get Started</button>
                    <button className="get-api-access">Get API Access</button>
                </div>
                <p className="notice">
                    Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation
                </p>
            </main>
        </div>
    );
};

export default BookAI;
