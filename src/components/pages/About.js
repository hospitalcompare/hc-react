import React from 'react';

const About = () => {
    return (
        // The React.Fragment is in place of the single div wrapper that is required for every component
        <React.Fragment>
            <div className="container">
                <h1>About Us</h1>
                <p>This is the about page!</p>
            </div>
        </React.Fragment>
    );
};

export default About;