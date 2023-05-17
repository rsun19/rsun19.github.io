import React from 'react';
import './index.css';

const Portfolio = () => {

    const portfolioItems = [
        {
            title: "Trip Planning App Using Flutter",
            description: "Developed a mobile app that allows people to create trip itinenaries, view them on maps, and share them with people. Users can create trip itineraries using Chat GPT, share them with their friends, and download itineraries from other users. Users can also view NYC real-time subway arrivals thanks to the GTFS-rt data given by MTA's API. Users can use direction-by-direction navigation as an alternative to Google maps using Open Street Maps API and Open Route Service API. The application also has two databases: one stored locally using SQLite, and another stored online using Firebase. By doing this, users can log-in using Google Sign In services, and share trip itineraries with other. Warning: The GitHub repo is not updated because I use a private repo currently. The code and organization is not representative of the current state of the app. I recently made large-scale UI changes, many bug fixes, and implemented a caching system, which is not reflected anywhere yet."
            ,link1: "https://testflight.apple.com/join/f5PW402r",
            link2: "https://github.com/rsun19/Trip-Planner-App"
        },
        {
            title: "Pytorch",
            description: "Developed a model using PyTorch that can classify recyclable items. You can take a picture, and upload it to the website to see if it is recyclable or not. I trained ResNet18's pre-trained model with thousands of images and the model is 84% accurate on the testing data. The classifications are metal, glass, plastic, paper, cardboard, and trash."
            ,link1: "https://www.recycleai.tech/",
            link2: "https://github.com/rsun19/RecycleImageClassifier_dev"
        },
        {
            title: "Book Blog with Flask",
            description: "Developed a book blog using Flask, with Python as its backend and HTML, CSS, and JavaScript for the front end. The blog posts I create go directly towards a database, and users can use their Google Account to log in and create comments."
            ,link1: "https://www.robertsrandomreviews.com/about",
            link2: "https://github.com/rsun19/book-blog-"
        }
    ]

    return (
        <div>
            <h1 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px", fontSize: "40px" }}>Portfolio</h1>   
            {
                portfolioItems.map((item, index) => (        
                        <div key={index} style={{ textAlign: 'center', marginBottom: '1rem', marginLeft: '15px', marginRight: '15px'}}>
                          <br/>
                          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.title}</h2>
                          <br/>
                          <p>{item.description}</p>
                          <br/>
                          <a href={item.link1} target="_blank" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'lightblue', color: 'black', textDecoration: 'none', borderRadius: '4px'  }}>View Website</a>
                          <br/>
                          <br/>
                          <a href={item.link2} target="_blank" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'lightblue', color: 'black', textDecoration: 'none', borderRadius: '4px'  }}>View Source Code</a>
                        </div>
                      )
                )
            }
            <br />
            <h1 style={{textAlign: 'center', fontSize: '40px'}}>This website was made with React.</h1>
            <br/>
            <div style={{ textAlign: 'center', marginBottom: '1rem', marginLeft: '15px', marginRight: '15px' }}>
                <a href="https://github.com/rsun19/Portfolio" target="_blank" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'lightblue', color: 'black', textDecoration: 'none', borderRadius: '4px' }}>View Source Code</a>
            </div>
            <br/>
            <br/>
        </div>
      );
};

export default Portfolio;