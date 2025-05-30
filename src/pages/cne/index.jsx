import React from 'react';
import './cne.css';

function Cne() {
    return (
        <div className="containerCne">
            <h1>Pareceres CNE</h1>
            <ul className="listaCne">
                {pareceres.map((parecer, index) => (
                    <li key={index}>{parecer}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cne;
