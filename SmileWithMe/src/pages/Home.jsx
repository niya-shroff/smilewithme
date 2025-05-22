import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>SmileWithMe Productions</h1>
            <p>We create art through short films, spoken word poetry, DJ mixes, and fashion.</p>
            <nav>
                <ul>
                    <li><Link to="/films">Short Films</Link></li>
                    <li><Link to="/poetry">Spoken Word Poetry</Link></li>
                    <li><Link to="/mixes">DJ Mixes</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
        </div>
    );
}
