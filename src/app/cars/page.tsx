import React from 'react';
import Link from 'next/link';

const Cars: React.FC = () => {
    return (
        <div>
            <h1>Next Page</h1>
            <p>This is a basic Next.js page component.</p>
            <Link href="/">
                <a>Go back to the home page</a>
            </Link>
        </div>
    );
};

export default Cars;