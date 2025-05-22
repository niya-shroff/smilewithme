import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Looks like this page doesn't exist.</p>
            <Link to="/">Go back home</Link>
        </div>
    );
}
