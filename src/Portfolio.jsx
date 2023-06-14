import React from 'react';
import './index.css';

const Portfolio = () => {

    const portfolioItems = [
        {
            id: 1,
            title: "Trip Planning App Using Flutter",
            description: "Developed a mobile app that allows people to create trip itinenaries, view them on maps, and share them with people. Users can create trip itineraries using Chat GPT, share them with their friends, and download itineraries from other users. Users can also view NYC real-time subway arrivals thanks to the GTFS-rt data given by MTA's API. Users can use direction-by-direction navigation as an alternative to Google maps using Open Street Maps API and Open Route Service API. The application also has two databases: one stored locally using SQLite, and another stored online using Firebase. By doing this, users can log-in using Google Sign In services, and share trip itineraries with others. Warning: The GitHub repo is not updated because I use a private repo currently. The code and organization is not representative of the current state of the app. I recently made large-scale UI changes, many bug fixes, and implemented a caching system, which is not reflected anywhere yet.",
            links: [
                {id: 1, link: "https://testflight.apple.com/join/f5PW402r", name: "View website"},
                {id: 2, link: "https://github.com/rsun19/Trip-Planner-App", name: "View source code"} 
            ]
        },
        {
            id: 2,
            title: "Book Blog with Flask",
            description: "Developed a book blog using Flask, with Python as its backend and HTML, CSS, Tailwind CSS, and JavaScript for the front end. The blog posts I create go directly towards a database, and users can use their Google Account to log in and create comments.",
            links: [
                {id: 1, link: "https://www.robertsrandomreviews.com", name: "View website" },
                {id: 2, link: "https://github.com/rsun19/book-blog-", name: "View source code"} 
             ]
        },
        {
            id: 3,
            title: "Joke Generator with Swift, React, Flask, and SpaCy.",
            description: "Developed a joke generator with a web and mobile component. I used React for the web component, and Swift for the iMessage extension component. For the backend, I used Flask and Postgres, and served content with an API.",
            links: [
                {id: 1, link: "https://robertssun.me/jokegenerator", name: "View website"}, 
                {id: 2, link: "https://github.com/rsun19/joke-generator-app", name: "View Swift code"},
                {id: 3, link: "https://github.com/rsun19/jokegenerator", name: "View React code"},
                {id: 4, link: "https://github.com/rsun19/joke_generator", name: "View Flask code"}
            ]
        },
        {
            id: 4,
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
            <h1 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px", fontSize: "40px" }}>Portfolio</h1>   
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '40px' }}>
                {
                portfolioItems.map((item, index) => (
                    <div id={item.id} style={{ marginLeft: '40px', marginRight: '40px'}}>  
                        <div className="w-full rounded overflow-hidden shadow-lg border">
                            <div style={{ padding: '40px' }}>
                                <div className="font-bold text-xl mb-2">{item.title}</div>
                                <p className="text-gray-700 text-base">
                                    {item.description}
                                </p>
                                <div className="pt-5 pb-1">
                                    { 
                                    item.links.map((link, linkIndex) => (
                                        <span id={link.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            <a href={link.link} target="_blank" style={{ padding: '20px 0px', color: 'black', textDecoration: 'none' }}>{link.name}</a>
                                        </span>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
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