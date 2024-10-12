import React, { useEffect, useState } from 'react';
import './APIDemo.css';
import './WebDevelopment.css';

const APIDemo = () => {
    const [cryptoPrices, setCryptoPrices] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCryptoPrices = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,usd-coin,solana&vs_currencies=usd');
            if (!response.ok) {
                throw new Error('Failed to fetch prices');
            }
            const data = await response.json();
            setCryptoPrices(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCryptoPrices();
    }, []);

    return (
        <div id="api-demo" className="web-development-section">
            console.log("Checking if API is rendered");
            <span className="gold-text">APIs</span>

            <p>
                I possess extensive experience in working with Application Programming Interfaces (APIs), enabling seamless integration and communication between various software systems. 
                My proficiency in designing and implementing RESTful APIs enhances data accessibility and interoperability, allowing applications to leverage data from diverse sources efficiently. 
                I have worked with tools such as Postman for testing API endpoints, and I am skilled in documenting APIs using OpenAPI specifications. 
                I am committed to following best practices in API development, ensuring that my solutions are both robust and scalable.
            </p>

            <div className="tech-icons">
                <a href="https://www.flaticon.com/free-icons/express" title="Express icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/express.png" alt="Express" />
                </a>
                <a href="https://www.flaticon.com/free-icons/node-js" title="Node.js icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" />
                </a>
                <a href="https://www.flaticon.com/free-icons/postman" title="Postman icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/postman.png" alt="Postman" />
                </a>
                <a href="https://www.flaticon.com/free-icons/flask" title="Flask icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/flask.png" alt="Flask" />
                </a>
                <a href="https://www.flaticon.com/free-icons/open-api" title="OpenAPI icons" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000" alt="OpenAPI" />
                </a>
            </div>

            {loading && <p>Loading cryptocurrency prices...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {Object.keys(cryptoPrices).length > 0 && (
                <div className="crypto-prices">
                    <h3>Latest Cryptocurrency Prices:</h3>
                    <div className="crypto-icons">
                        <div className="crypto-item">
                            <img src="https://img.icons8.com/?size=100&id=XDum8M4mrAZQ&format=png&color=000000" alt="Bitcoin" />
                            <span className="crypto-price">Bitcoin: ${cryptoPrices.bitcoin.usd}</span>
                        </div>
                        <div className="crypto-item">
                            <img src="https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000" alt="Ethereum" />
                            <span className="crypto-price">Ethereum: ${cryptoPrices.ethereum.usd}</span>
                        </div>
                        <div className="crypto-item">
                            <img src="https://img.icons8.com/?size=100&id=1jPxlShNofZt&format=png&color=000000" alt="USDC" />
                            <span className="crypto-price">USDC: ${cryptoPrices['usd-coin'].usd}</span>
                        </div>
                        <div className="crypto-item">
                            <img src="https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000" alt="Solana" />
                            <span className="crypto-price">Solana: ${cryptoPrices.solana.usd}</span>
                        </div>
                    </div>

                    <p className="api-skills-description">
                        I excel in utilizing APIs to enhance application functionality and user experience. My skills include integrating third-party APIs, optimizing API performance, and ensuring security through authentication and authorization methods.
                    </p>
                </div>
            )}
        </div>
    );
};

export default APIDemo;
