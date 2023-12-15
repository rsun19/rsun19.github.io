import { useEffect, useState } from 'react';
import Typing from './Typing';
import useWidth from './changeWidth';
// import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation, FullpageContext } from '@ap.cx/react-fullpage'
import PortfolioSlider from './PortfolioSlider';
import useHeight from './changeHeight';
import 'font-awesome/css/font-awesome.min.css';
import WorkSlider from './WorkSlider';
import profile from '.././assets/myImage.jpg'
import ChatBot from './ChatBot';
import { motion, useScroll } from "framer-motion"
// import Menu from './Menu';

interface Review {
    id: string;
    url: string;
    title: string;
    author_name: string;
    rating_int: string;
}

const Home = () => {
    useEffect(() => {
        scrollUp();
    }, []);

    const { scrollYProgress } = useScroll();

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const scrollDown = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };
    const [reviewsData, setReviewsData] = useState<Review[]>([]);
    const { md, twoxl } = useWidth();
    const smH = useHeight();

    useEffect(() => {
        const fetchReviewsData = async () => {
            try {
                const response = await fetch('https://robertsrandomreviews.com/api/post');
                if (response.status === 200) {
                    const jsonData: Review[] = await response.json();
                    jsonData.sort((a, b) => parseInt(b.rating_int) - parseInt(a.rating_int));
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

        return (
            <>
            <div style={{ background: '#D3D3D3' }}>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <br />
                {md && <div className='alert-viewer' style = {{ position: 'absolute', transform: 'translateX(-50%)', textAlign: 'center', }}>
                     <a href='https://robertsrandomreviews.com/' target='_blank' className="text-center lg:px-4">
                         <div className="p-2 bg-sky-600 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex" role="alert">
                         <span className="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs 2xl:text-lg 4xl:text-xl 5xl:text-2xl font-bold mr-3">Attention</span>
                             <span className="font-semibold mr-2 text-left flex-auto py-1 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl">Looking for my book blog? Click here!</span>
                             <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                         </div>
                     </a>
                 </div> }
                 {!md && <div className='alert-viewer' style = {{ marginLeft: '1rem', marginRight: '1rem' }}>
                     <a href='https://robertsrandomreviews.com/' target='_blank' className="text-center lg:px-4">
                         <div className="p-2 bg-sky-600 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex" role="alert">
                         <span className="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs 2xl:text-lg 4xl:text-xl 5xl:text-2xl font-bold mr-3">Attention</span>
                             <span className="font-semibold mr-2 text-left flex-auto py-1 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl">Looking for my book blog?</span>
                             <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                         </div>
                     </a>
                 </div> }
                 <br />
                 {twoxl && <br />}
                <div style={{ textAlign: 'center'}}> 
                  {md && <p className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl text-black" style={{ marginTop: '3rem' }}>Hi, I'm Robert.</p>}
                  {!md && <p className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl text-black" style={{ marginTop: '1rem' }}>Hi, I'm Robert.</p>}                
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
                    {!twoxl && <img className="w-28 h-28 p-1 rounded-full ring-2 ring-gray-300" style={{ objectFit: 'cover' }} src={profile} alt="Bordered avatar" />}
                    {twoxl && <img className="w-40 h-40 p-1 rounded-full ring-2 ring-gray-300" style={{ objectFit: 'cover' }} src={profile} alt="Bordered avatar" />}
                  </div>
                  <br />
                  <Typing />
                  <br />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
                    <a target='_blank' href="https://www.linkedin.com/in/rob-sun/" style={{ marginRight: '10px', color: 'black' }}>
                        {!twoxl && <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>}
                        {twoxl && <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>}
                    </a>

                    <a target='_blank' href="mailto:robertssun1234@gmail.com" style={{ marginRight: '10px', color: 'black' }}>
                        {!twoxl && <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>}
                        {twoxl && <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>}
                    </a>

                    {/* <a target='_blank' href="https://docs.google.com/document/d/1xIxCOk0GNFJ-5rsPaYgbL90n1iOf3J7O6YzK6uhAuu4" style={{ marginRight: '10px', color: 'black' }}>
                        {!twoxl && <i className="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i>}
                        {twoxl && <i className="fa fa-file-pdf-o fa-3x" aria-hidden="true"></i>}
                    </a> */}

                    <a target="_blank" href="https://docs.google.com/document/d/1hG3yis9QbTmj8pNKluLfpBXrWxg3TpeZJIHi8bYpqDE/edit?usp=sharing" style={{ marginRight: '10px', color: 'black' }}>
                        {!twoxl && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64" >
                            <path d="m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z"/>
                            <path d="M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z"/>
                            <path d="M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z"/>
                        </svg>}
                        {twoxl && <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64" >
                            <path d="m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z"/>
                            <path d="M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z"/>
                            <path d="M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z"/>
                        </svg>}
                    </a>

                    <a target='_blank' href="https://github.com/rsun19" style={{ color: 'black' }}>
                        {!twoxl && <i className="fa fa-github fa-2x" aria-hidden="true"></i>}
                        {twoxl && <i className="fa fa-github fa-3x" aria-hidden="true"></i>}
                    </a>
                 </div>
                </div>
                <br />
                {md && <h1 className="text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 3xl:mb-10 5xl:text-7xl" style={{textAlign: 'center', color: 'black', paddingTop: '10px', marginLeft: '1rem', marginRight: '1rem'}}>Ask the Chat Bot about my experiences and skip the resume! Or, scroll down. Either way is fine by me!</h1>}
                {!md && <h1 className="text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 3xl:mb-10 5xl:text-7xl" style={{textAlign: 'center', color: 'black', paddingTop: '10px', marginLeft: '1rem', marginRight: '1rem'}}>Ask the Chat Bot about my experiences and skip the resume! Or, scroll down.</h1>}
                <ChatBot />
                <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl" style={{textAlign: 'center', color: 'black', paddingTop: '10px'}}>Portfolio</h1>
                <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                    <PortfolioSlider />
                </div>
                <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl" style={{textAlign: 'center', color: 'black', paddingTop: '10px'}}>Work Experience</h1>
                <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                    <WorkSlider />
                </div>
                <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl" style={{textAlign: 'center', color: 'black', marginTop: '1rem' }}>Favorite books:</h1>
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
            
                <br/>
                <br/>
            </div>
        </>
        );
      };

export default Home;
