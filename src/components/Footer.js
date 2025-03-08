import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <a href="/privacy-policy">Política de Privacidade</a>
                <a href="/terms-of-use">Termos de Uso</a>
                <div className="social-media">
                    <a href="https://facebook.com/contacomigo" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/contacomigo" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com/company/contacomigo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;