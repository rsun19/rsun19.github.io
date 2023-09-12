import React, { useEffect, useState, Component } from 'react';
import backgroundImage from './assets/myImage.jpg';
import { Link } from "react-router-dom";
import hiking from './assets/hiking.jpg'
import salsa from './assets/salsa.png'
import fire from './assets/hosePour.jpg'
import Typing from './Typing';
import useWidth from './changeWidth.js';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import PortfolioSlider from './PortfolioSlider';
import HobbySlider from './hobbySlider';
import useHeight from './changeHeight';
import dark from './assets/dark.jpeg'
import 'font-awesome/css/font-awesome.min.css';


const Home = () => {
    useEffect(() => {
        scrollUp();
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const [reviewsData, setReviewsData] = useState([]);
    const md = useWidth();
    const smH = useHeight();

    useEffect(() => {
        const fetchReviewsData = async () => {
            try {
                const response = await fetch('https://robertsrandomreviews.com/api/post');
                if (response.status === 200) {
                    const jsonData = await response.json();
                    jsonData.forEach(item => {
                        item.rating_int = parseInt(item.rating_int);
                    });
                    jsonData.sort((a, b) => b.rating_int - a.rating_int);
                    if (smH) {
                        setReviewsData(jsonData.slice(0, 9));
                    } else {
                        setReviewsData(jsonData.slice(0, 7));
                    }
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
          <Fullpage>
            <FullPageSections>
              <FullpageSection
                style={{
                  backgroundColor: 'black',
                  height: '80vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ position: 'relative', width: '100%' }}>
                    <img src={dark} alt="Image" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '80vh', objectFit: 'cover' }} />
                </div>
                {md && <div className='alert-viewer' style = {{ position: 'absolute', transform: 'translateX(-50%)', textAlign: 'center', }}>
                     <a href='https://robertsrandomreviews.com/' target='_blank' className="text-center lg:px-4">
                         <div class="p-2 bg-sky-600 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex" role="alert">
                         <span class="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs 2xl:text-lg 4xl:text-xl 5xl:text-2xl font-bold mr-3">Attention</span>
                             <span class="font-semibold mr-2 text-left flex-auto py-1 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl">Looking for my book blog? Click here!</span>
                             <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                         </div>
                     </a>
                 </div> }
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}> 
                  <p className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl text-white">Hi, I'm Robert.</p>                
                  <br />
                  <br />
                  <br />
                  <Typing />
                  <br />
                  <br />
                  <br />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
                    <a target='_blank' href="https://www.linkedin.com/in/rob-sun/" style={{ marginRight: '10px', color: 'white' }}>
                        <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                    </a>

                    <a target='_blank' href="mailto:robertssun1234@gmail.com" style={{ marginRight: '10px', color: 'white' }}>
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    </a>

                    <a target='_blank' href="https://docs.google.com/document/d/1xIxCOk0GNFJ-5rsPaYgbL90n1iOf3J7O6YzK6uhAuu4" style={{ marginRight: '10px', color: 'white' }}>
                        <i className="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i>
                    </a>

                    <a target='_blank' href="https://github.com/rsun19" style={{ color: 'white' }}>
                        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                    </a>
                 </div>
                </div>
              </FullpageSection>
              <FullpageSection
                    style={{
                    backgroundColor: 'teal',
                    padding: '1em',
                    }}
                >
                {smH && <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl" style={{textAlign: 'center', color: 'white', paddingTop: '10px'}}>Portfolio</h1>}
                <PortfolioSlider />
              </FullpageSection>
              <FullpageSection
                    style={{
                    backgroundColor: 'teal',
                    padding: '1em',
                    }}
                >
                   <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl" style={{textAlign: 'center', color: 'white'}}>Favorite books:</h1>
                <div className="bg-zinc-800 rounded-lg" style={{ margin: '20px 40px 20px 40px'}}>
                 <ul className='ml-3 mr-3 4xl:mr-5 4xl:ml-5'>
                     {reviewsData.map((item) => (
                        <a target='_blank' href={item.url} key={item.id}>
                            <li className="pb-3 pt-3 4xl:pt-5 4xl:pb-5" style={{ borderBottom: '1px solid white' }}>
                                <div className="flex items-center space-x-4">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm 2xl:text-xl 4xl:text-3xl 5xl:text-4xl text-white truncate">
                                        {item.title}
                                        </p>
                                        <p className="text-sm 2xl:text-xl 4xl:text-3xl 5xl:text-4xl text-gray-400 truncate">
                                        {item.author_name}
                                        </p>
                                    </div>
                                    <div className="inline-flex 2xl:text-xl 4xl:text-3xl 5xl:text-4xl items-center text-base font-semibold text-white">
                                        Rating: {item.rating_int}/10
                                    </div>
                                </div>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
              </FullpageSection>
            </FullPageSections>
          </Fullpage>
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
            <br/>
            <br/>
          </div>
        );
      };
//     return (
//         <div>
//             <div className='pt-12' style={{ position: 'relative' }}>
//             { md && <div style={{ maxHeight: '2500px', overflow: 'hidden'}}>
//                     <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
//                         <img src={backgroundImage} alt="Image" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: 'auto' }} />
//                     </div>
//                 </div> }
//                 { !md && <img src={backgroundImage} alt="Image" style={{ width: '100%', height: 'auto' }} /> }
//                 { md && <div className='alert-viewer pt-12 3xl:pt-20' style = {{ position: 'absolute', transform: 'translateX(-50%)', textAlign: 'center', }}>
//                     <a href='https://robertsrandomreviews.com/' target='_blank' className="text-center lg:px-4">
//                         <div class="p-2 bg-sky-600 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex" role="alert">
//                         <span class="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs 2xl:text-lg 4xl:text-xl 5xl:text-2xl font-bold mr-3">Attention</span>
//                             <span class="font-semibold mr-2 text-left flex-auto py-1 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl">Looking for my book blog? Click here!</span>
//                             <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
//                         </div>
//                     </a>
//                 </div> }
//                 <div className='pt-6 3xl:pt-8' style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
//                     <Typing />
//                 </div>
//                 { md && 
//                 <div className='pt-6' style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div className='text-md 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl' style = {{ position: 'absolute', bottom: '20%', textAlign: 'center'}}>
//                         <button className='rounded-lg' style={buttonStyles}>
//                             <Link to="/projects">
//                                 <p className='px-3 py-1.5 md:px-6 py-4'>Portfolio</p>
//                             </Link>    
//                         </button>
//                     </div>
//                 </div>
//                 }
//                 { !md && 
//                 <div className='imageStyle' style={{ position: 'absolute', left: '50%', transform: 'translate(-50%)', textAlign: 'center' }}>
//                     <button className='rounded-lg' style={buttonStyles}>
//                         <Link to="/projects">
//                             <p className='px-3 py-1.5'>Portfolio</p>
//                         </Link>    
//                     </button>
//                 </div>
//                 }
//                 { !md && 
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div style = {{ position: 'absolute', bottom: '2%', textAlign: 'center'}}>
//                         <a href='https://robertsrandomreviews.com/' target='_blank' className="text-center lg:px-4">
//                             <div class="p-2 bg-sky-600 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex" role="alert">
//                                 <span class="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs font-bold mr-3">Attention</span>
//                                 <span class="font-semibold mr-2 text-left flex-auto py-1 text-sm pastSE:text-md">Looking for my book blog?</span>
//                                 <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
//                             </div>
//                         </a>
//                     </div> 
//                 </div>
//                 }
//             </div>
//             <div style={{ margin: '40px'}}>  
//                 <div className="w-full rounded-lg overflow-hidden shadow-lg border">
//                     <div style={{ padding: '40px' }}>
//                         <div className="font-bold text-xl mb-2 2xl:text-2xl 4xl:text-4xl 5xl:text-5xl">Connect with me!</div>
//                         <p className="text-gray-700 text-base 2xl:text-xl 4xl:text-3xl 5xl:text-4xl">
//                             Hi! I'm Robert, a rising third-year at the University of Virginia! Feel free to look around and reach out if you want to connect!
//                         </p>
//                         <div className="pt-5 pb-1">
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm 2xl:text-md 4xl:text-xl 5xl:text:2xl font-semibold text-gray-700 mr-2 mb-2">
//                                 <a href="https://www.linkedin.com/in/rob-sun/" target="_blank" style={{ padding: '20px 0px', color: 'black', textDecoration: 'none' }}>LinkedIn</a>
//                             </span>
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm 2xl:text-md 4xl:text-xl 5xl:text:2xl font-semibold text-gray-700 mr-2 mb-2">
//                                 <a href="https://github.com/rsun19" target="_blank" style={{ padding: '20px 0px', color: 'black', textDecoration: 'none' }}>GitHub</a>
//                             </span>
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm 2xl:text-md 4xl:text-xl 5xl:text:2xl font-semibold text-gray-700 mr-2 mb-2">
//                                 <a href="https://docs.google.com/document/d/1xIxCOk0GNFJ-5rsPaYgbL90n1iOf3J7O6YzK6uhAuu4/edit" target="_blank" style={{ padding: '20px 0px', color: 'black', textDecoration: 'none' }}>View CV</a>
//                             </span>
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm 2xl:text-md 4xl:text-xl 5xl:text:2xl font-semibold text-gray-700 mr-2 mb-2">
//                                 <a href="mailto:dum2zm@virginia.edu" target="_blank" style={{ padding: '20px 0px', color: 'black', textDecoration: 'none' }}>Email</a>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl" style={{textAlign: 'center'}}>Favorite books:</h1>
//             <p style={{textAlign: 'center', marginBottom: '30px'}} className="text-2xl 3xl:text-3xl 4xl:text-4xl p-2 5xl:text-5xl">Data courtesy of my book blog's API</p>
//             <div className="bg-zinc-800 rounded-lg" style={{ margin: '20px 40px 20px 40px'}}>
//                 <ul className='ml-3 mr-3 4xl:mr-5 4xl:ml-5'>
//                     {reviewsData.map((item) => (
//                         <a href={item.url} key={item.id}>
//                             <li className="pb-3 pt-3 4xl:pt-5 4xl:pb-5" style={{ borderBottom: '1px solid white' }}>
//                                 <div className="flex items-center space-x-4">
//                                     <div className="flex-1 min-w-0">
//                                         <p className="text-sm 2xl:text-xl 4xl:text-3xl 5xl:text-4xl text-white truncate">
//                                         {item.title}
//                                         </p>
//                                         <p className="text-sm 2xl:text-xl 4xl:text-3xl 5xl:text-4xl text-gray-400 truncate">
//                                         {item.author_name}
//                                         </p>
//                                     </div>
//                                     <div className="inline-flex 2xl:text-xl 4xl:text-3xl 5xl:text-4xl items-center text-base font-semibold text-white">
//                                         Rating: {item.rating_int}/10
//                                     </div>
//                                 </div>
//                             </li>
//                         </a>
//                     ))}
//                 </ul>
//             </div>
//             <div>
//                 <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl 5xl:text-7xl mb-5 3xl:mb-10 mt-5 3xl:mt-10" style={{textAlign: 'center'}}>Hobbies:</h1>
//                 <br/>
//             </div> 
//             <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//                 {slides.map((slide) => (
//                     <div
//                     key={slide.id}
//                     style={{
//                         flex: '1 1 300px',
//                         marginBottom: '40px',
//                         marginLeft: '40px',
//                         marginRight: '40px',
//                         minWidth: '0',
//                     }}
//                         >
//                         <div
//                             style={{
//                             width: '100%',
//                             height: '100%',
//                             }}
//                         >
//                             <div className="w-full rounded-lg overflow-hidden shadow-lg border">
//                                 <div style={{ padding: '20px' }}>
//                                     <img
//                                     src={slide.image}
//                                     alt={slide.text}
//                                     style={{
//                                         width: '100%',
//                                         height: 'auto',
//                                         margin: '0 auto',
//                                     }}
//                                     className='p-4'
//                                     />
//                                     <p
//                                     className="text-gray-700 text-base 2xl:text-2xl 4xl:text-4xl 5xl:text-5xl"
//                                     style={{ textAlign: 'center' }}
//                                     >
//                                     {slide.text}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div> 
//             <div class="flex justify-end floating-action-button">
//                 <button
//                     class="bg-teal-500 3xl:h-16 text-white font-bold rounded-xl p-4 ml-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     onClick={scrollUp}
//                 >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
//                 </svg>      
//                 </button>
//             </div>   
//             <br/>
//             <br/>
//         </div>
//       );
// };

export default Home;
