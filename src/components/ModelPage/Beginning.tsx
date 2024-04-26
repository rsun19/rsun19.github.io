import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment, OrbitControls } from '@react-three/drei';
import Home from '../Home';
import { Review } from '../Reviews/Review'

const Beginning = () => {
  const [reviewsData, setReviewsData] = useState<Review[]>([]);
    
  useEffect(() => {
      const fetchReviewsData = async () => {
        console.log('fetching...');
        try {
          const response = await fetch(
            "https://robertsrandomreviews.com/api/post",
          );
          if (response.status === 200) {
            const jsonData: Review[] = await response.json();
            jsonData.sort(
              (a, b) => parseInt(b.rating_int) - parseInt(a.rating_int),
            );
            setReviewsData(jsonData.slice(0, 9));
            console.log(jsonData);
          } else {
            console.error("Error: Unexpected status code", response.status);
          }
        } catch (error) {
          console.error("Error fetching reviews data:", error);
        }
      };
      fetchReviewsData();
  });

    const [click, setClick] = useState(false);
    const startAnimation = ()  => {
        const portfolioButton = document.getElementById('portfolioButton');
        setClick(true);
        if (portfolioButton) {
            portfolioButton.style.display = 'none';
        }
    }

    useEffect(() => {
      startAnimation();
    })

    let isMidToggled = false;

    const [finishAnimation, setFinishAnimation] = useState(false);

    const finishAnimationChange = (change: boolean) => {
      setFinishAnimation(change);
    }

    const finishMidFunc = () => {
      if (!isMidToggled){
        const page = document.getElementById('home-page');
        if (page) {
          page.classList.toggle('show');
          isMidToggled = true;
          const app = document.getElementById('App');
          const progressBar = document.getElementById('progress-bar');
          if (app && progressBar) {
            page.addEventListener('transitionend', () => {
              setTimeout(() => {
                page.style.transition = 'none';
                page.style.transform = 'none';
                app.style.overflow = 'visible';
                progressBar.style.display = 'block';
                window.scrollBy(0, 1);
              }, 0);
            });
          }
        }
      }
    }   

    return (
      <div>
        <div style={{ position: 'relative', background: "#D3D3D3" }}>
          <Home reviewsData={reviewsData} />
        </div>
        {!finishAnimation && <div style={{ margin: '0px', padding: '0px'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* <button id='portfolioButton' className="bg-blue-500 hover:bg-blue-700 text-white 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-bold py-2 px-4 rounded-full" style={{ position: 'absolute', zIndex: '1'}} onClick={startAnimation}>
              View Portfolio Page!
          </button> */}
          <div style={{ height: '100vh', width: '100vw', margin: '0px', padding: '0px'}}>
            <Canvas>
                {/* add full path for development --> "./portfoliodev/farm_field_puresky_1k.hdr"*/}
                <Environment files="./farm_field_puresky_1k.hdr" background/>
                <Suspense fallback={null}>
                    {click && <Model onAnimationFinish={finishAnimationChange} onMidwayFinish={finishMidFunc} start={click}/>}
                    <OrbitControls />
                </Suspense>
            </Canvas>
          </div>
          </div>
        </div>}
      </div>
      );
};

export default Beginning;