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
                    {/* <h1 style={{ color: 'white', fontSize: '40px' }} class="font-sans">About Me</h1> */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <button style={buttonStyles}>
                        <Link to="/projects" className="text-blue-600">Portfolio</Link>    
                    </button>
                </div>
            </div>
            <div style={{textAlign: 'center', marginBottom: '1rem', marginLeft: '15px', marginRight: '15px' }}>
                <br/>
                    <h1 style={{textAlign: 'center', fontSize: '40px'}}>Connect with me!</h1>
                <br/>
                    <p style={{textAlign: 'center', fontSize: '40px'}}>Hi! I'm Robert, a rising third-year at the University of Virginia! Feel free to look around and reach out if you want to connect!</p>
                <br/>
                <a href="https://www.linkedin.com/in/rob-sun/" target="_blank" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'lightblue', color: 'black', textDecoration: 'none', borderRadius: '4px'  }}>Linkedin</a>
                <br/>
                <br/>
                <a href="https://github.com/rsun19" target="_blank" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'lightblue', color: 'black', textDecoration: 'none', borderRadius: '4px'  }}>Github</a>
                <br/>
                <br/>
                <a href="https://docs.google.com/document/d/1xIxCOk0GNFJ-5rsPaYgbL90n1iOf3J7O6YzK6uhAuu4/edit" target="_blank" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'lightblue', color: 'black', textDecoration: 'none', borderRadius: '4px'  }}>View CV</a>
                <br/>
            </div>
            <div>
                <br/>
                    <h1 style={{textAlign: 'center', fontSize: '40px'}}>Hobbies</h1>
                <br/>
            </div> 
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="mb-4">
                        <img src={slide.image} alt={slide.text} style={{ width: '50%', height: 'auto', margin: '0 auto' }} className="w-full h-auto" />
                        <br/>
                        <h2 className="text-xl font-bold" style={{ textAlign: 'center', fontSize: "20px"}}>{slide.text}</h2>
                        <br/>
                    </div>
                    
                ))}
            </div>
            <br/>
            <br/>
        </body>

      );
};

export default Home;