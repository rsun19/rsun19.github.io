import React, { useEffect, useState } from 'react';
import backgroundImage from './assets/myImage.jpg';
import { Link } from "react-router-dom";
import hiking from './assets/hiking.jpg'
import salsa from './assets/salsa.png'
import fire from './assets/fire.jpg'
import Typing from './Typing';

const Home = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        const fetchReviewsData = async () => {
            console.log("hello")
            try {
                const response = await fetch('https://robertsrandomreviews.com/api/post');
                if (response.status === 200) {
                    const jsonData = await response.json();
                    jsonData.forEach(item => {
                        item.rating_int = parseInt(item.rating_int);
                    });
                    jsonData.sort((a, b) => b.rating_int - a.rating_int);
                    setReviewsData(jsonData.slice(0, 10));
                    console.log(jsonData)
                  } else {
                    console.error('Error: Unexpected status code', response.status);
                  }
            } catch (error) {
                console.error('Error fetching reviews data:', error);
            }
        };

        fetchReviewsData();
    }, []);

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
        <div>
            <div style={{ position: 'relative' }}>
                <img src={backgroundImage} alt="Image" style={{ width: '100%', height: 'auto' }} />
                <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
                    <Typing />
                </div>
                <div className='imageStyle' style={{ position: 'absolute', left: '50%', transform: 'translate(-50%)', textAlign: 'center' }}>
                    <button style={buttonStyles}>
                        <Link to="/projects">Portfolio</Link>    
                    </button>
                </div>
            </div>
            <div style={{ margin: '40px'}}>  
                <div className="w-full rounded overflow-hidden shadow-lg border">
                    <div style={{ padding: '40px' }}>
                        <div className="font-bold text-xl mb-2">Connect with me!</div>
                        <p className="text-gray-700 text-base">
                            Hi! I'm Robert, a rising third-year at the University of Virginia! Feel free to look around and reach out if you want to connect!
                        </p>
                        <div className="pt-5 pb-1">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <a href="https://www.linkedin.com/in/rob-sun/" target="_blank" style={{ padding: '20px 20px', color: 'black', textDecoration: 'none' }}>LinkedIn</a>
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <a href="https://github.com/rsun19" target="_blank" style={{ padding: '20px 20px', color: 'black', textDecoration: 'none' }}>GitHub</a>
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <a href="https://docs.google.com/document/d/1xIxCOk0GNFJ-5rsPaYgbL90n1iOf3J7O6YzK6uhAuu4/edit" target="_blank" style={{ padding: '20px 20px', color: 'black', textDecoration: 'none' }}>View CV</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style={{textAlign: 'center', fontSize: '30px'}}>Favorite books:</h1>
            <p style={{textAlign: 'center', fontSize: '15px', marginBottom: '30px'}}>Data courtesy of my book blog's API</p>
            <div className="bg-zinc-800" style={{ margin: '20px 40px 20px 40px'}}>
                <ul className='ml-3 mr-3'>
                    {reviewsData.map((item) => (
                        <a href={item.url} key={item.id}>
                            <li className="pb-3 pt-3" style={{ borderBottom: '1px solid white' }}>
                                <div className="flex items-center space-x-4">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white truncate">
                                        {item.title}
                                        </p>
                                        <p className="text-sm text-gray-400 truncate">
                                        {item.author_name}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-white">
                                        Rating: {item.rating_int}/10
                                    </div>
                                </div>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
            <div>
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
        </div>
      );
};

export default Home;