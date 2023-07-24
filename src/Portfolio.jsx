import React, { useEffect } from 'react';
import './index.css';
import tripPlanner from "./assets/tripPlanner.jpg"
import bookBlog from "./assets/bookBlog.jpg"
import jokeGenerator from "./assets/jokeGenerator.jpg"
import recycleAI from "./assets/recycleAI.jpg"

const Portfolio = () => {
    useEffect(() => {
        scrollUp();
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const portfolioItems = [
        {
            id: 1,
            title: "Trip Planning App Using Flutter",
            photo: tripPlanner,
            description: "Developed a mobile app that allows people to create trip itinenaries, view them on maps, and share them with people. Users can create trip itineraries using Chat GPT, share them with their friends, and download itineraries from other users. Users can also view NYC real-time subway arrivals thanks to the GTFS-rt data given by MTA's API. Users can use direction-by-direction navigation as an alternative to Google maps using Open Street Maps API and Open Route Service API. The application uses Postgres with Flask, Firebase, token-based auth, and SQLite to handle authentication and secure data storage.",
            links: [
                {id: 1, link: "https://testflight.apple.com/join/f5PW402r", name: "Beta test app"},
                {id: 2, link: "https://github.com/rsun19/Trip-Planner-App", name: "View source code"} 
            ]
        },
        {
            id: 2,
            photo: bookBlog,
            title: "Book Blog with Flask",
            description: "Developed a book blog using Flask, with Python as its backend and HTML, CSS, Tailwind CSS, and JavaScript for the front end. The blog posts I create go directly towards a database, and users can use their Google Account to log in and create comments.",
            links: [
                {id: 1, link: "https://www.robertsrandomreviews.com", name: "View website" },
                {id: 2, link: "https://github.com/rsun19/book-blog-", name: "View source code"} 
             ]
        },
        {
            id: 3,
            photo: jokeGenerator,
            title: "Joke Generator with Swift, React, and Flask",
            description: "Developed a joke generator with a web and mobile component. I used React for the web component, and Swift for the iMessage extension component. For the backend, I used Flask and Postgres, and served content with an API. The jokes in the clean jokes filter are cleaned using linguistic techniques that calculate the Levenshtein distance between unwanted and target words and a ML model trained on toxic wikipedia comments.",
            links: [
                {id: 1, link: "https://robertssun.me/jokegenerator", name: "View website"}, 
                {id: 2, link: "https://testflight.apple.com/join/DHtgfi6C", name: "Beta test app"}, 
                {id: 3, link: "https://github.com/rsun19/joke-generator-app", name: "View Swift code"},
                {id: 4, link: "https://github.com/rsun19/jokegenerator", name: "View React code"},
                {id: 5, link: "https://github.com/rsun19/joke_generator", name: "View Flask code"}
            ]
        },
        {
            id: 4,
            photo: recycleAI,
            title: "Pytorch",
            description: "Developed a model using PyTorch that can classify recyclable items. You can take a picture, and upload it to the website to see if it is recyclable or not. I trained ResNet18's pre-trained model with thousands of images and the model is 84% accurate on the testing data. The classifications are metal, glass, plastic, paper, cardboard, and trash.",
            links: [
               {id: 1, link: "https://www.recycleai.tech/", name: "View website"},
               {id: 2, link: "https://github.com/rsun19/RecycleImageClassifier_dev", name: "View source code"} 
            ]
        }
    ]

    return (
        <div>
            <h1 className='pt-24' style={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px", fontSize: "40px" }}>Portfolio</h1>   
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                {
                portfolioItems.map((item) => (
                    <div id={item.id} style={{ marginLeft: '40px', marginRight: '40px'}}>  
                        <div className="max-w-full rounded overflow-hidden shadow-lg border">
                            <div>
                                <img src={item.photo} alt="Image" />
                            </div>
                            <div className='bg-teal-500'>
                                <div className='pr-12 pl-12 pb-12 pt-6'>
                                    <div className="font-bold text-xl mb-2 text-white 2xl:text-2xl">{item.title}</div>
                                    <p className="text-white text-base text-lg 2xl:text-xl">
                                        {item.description}
                                    </p>
                                    <div className="pt-5 pb-1">
                                        { 
                                        item.links.map((link) => (
                                            <span id={link.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                <a href={link.link} target="_blank" style={{ padding: '20px 0px', color: 'black', textDecoration: 'none' }}>{link.name}</a>
                                            </span>
                                        ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div class="flex justify-end floating-action-button">
                <button
                    class="bg-teal-500 3xl:h-16 text-white font-bold rounded-xl p-4 ml-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    onClick={scrollUp}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>      
                </button>
            </div>   
            <br />
            <h1 style={{textAlign: 'center', fontSize: '40px'}}>This website was made with React.</h1>
            <br/>
            <div style={{ textAlign: 'center', marginBottom: '1rem', marginLeft: '15px', marginRight: '15px' }}>
                <a href="https://github.com/rsun19/portfoliodev" target="_blank" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'lightblue', color: 'black', textDecoration: 'none', borderRadius: '4px' }}>View Source Code</a>
            </div>
            <br/>
            <br/>
        </div>
      );
};

export default Portfolio;