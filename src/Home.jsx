import React from 'react';
import backgroundImage from './assets/myImage.jpg';
import { Link } from "react-router-dom";
import hiking from './assets/hiking.jpg'
import salsa from './assets/salsa.png'
import fire from './assets/fire.jpg'

const Home = () => {
    const buttonStyles = {
        backgroundColor: 'lightblue',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
      };
    const slides = [
        {
            id: 1,
            image: hiking,
            text: 'Hiking'
        },

        {
            id: 2,
            image: salsa,
            text: 'Salsa-ing'
        },

        {
            id: 3,
            image: fire,
            text: 'Firefighting'
        }
    ]
    return (
        <body>
            <div style={{ position: 'relative' }}>
                <img src={backgroundImage} alt="Image" style={{ width: '100%', height: 'auto' }} />
                <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <h1 style={{ color: 'white', fontSize: '40px' }} class="font-sans">About Me</h1>
                </div>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <button style={buttonStyles}>
                        <Link to="/projects">Portfolio</Link>    
                    </button>
                </div>
            </div>
            <div style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px'}}>  
                <div class="w-full rounded overflow-hidden shadow-lg border">
                    <div style={{ padding: '40px' }}>
                        <div class="font-bold text-xl mb-2">Connect with me!</div>
                        <p class="text-gray-700 text-base">
                            Hi! I'm Robert, a rising third-year at the University of Virginia! Feel free to look around and reach out if you want to connect!
                        </p>
                    </div>
                        <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <a href="https://www.linkedin.com/in/rob-sun/" target="_blank" style={{ padding: '20px 20px', color: 'black', textDecoration: 'none' }}>LinkedIn</a>
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <a href="https://github.com/rsun19" target="_blank" style={{ padding: '20px 20px', color: 'black', textDecoration: 'none' }}>GitHub</a>
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <a href="https://docs.google.com/document/d/1xIxCOk0GNFJ-5rsPaYgbL90n1iOf3J7O6YzK6uhAuu4/edit" target="_blank" style={{ padding: '20px 20px', color: 'black', textDecoration: 'none' }}>View CV</a>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <br/>
                    <h1 style={{textAlign: 'center', fontSize: '40px'}}>Hobbies</h1>
                <br/>
            </div> 
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {slides.map((slide) => (
                    <div
                    key={slide.id}
                    style={{
                        flex: '1 1 300px',
                        marginBottom: '40px',
                        marginLeft: '40px',
                        marginRight: '40px',
                        minWidth: '0',
                    }}
                    >
                    <div
                        style={{
                        width: '100%',
                        height: '100%',
                        }}
                    >
                        <div className="w-full rounded overflow-hidden shadow-lg border">
                        <div style={{ padding: '20px' }}>
                            <img
                            src={slide.image}
                            alt={slide.text}
                            style={{
                                paddingTop: '20px',
                                width: '100%',
                                height: 'auto',
                                margin: '0 auto',
                            }}
                            />
                            <p
                            className="text-gray-700 text-base"
                            style={{ textAlign: 'center', marginTop: '10px' }}
                            >
                            {slide.text}
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            <br/>
            <br/>
        </body>

      );
};

export default Home;