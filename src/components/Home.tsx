import React, { useEffect, useState } from "react";
import Typing from "./Typing";
import useWidth from "../hooks/changeWidth";
import PortfolioSlider from "./PortfolioSlider";
import "font-awesome/css/font-awesome.min.css";
import WorkSlider from "./WorkSlider";
import profile from "../assets/myImage.jpg";
import Reviews from "./Reviews/Reviews"
import { motion, useScroll } from "framer-motion";
import Menu from "./Menu";
import ContactBar from "./ContactBar";
import AlertBoxWrapper from "./AlertBoxWrapper/AlertBoxWrapper";
import { Review } from "./Reviews/Review";

const Home = (): React.JSX.Element => {
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
  }, []);

  useEffect(() => {
    scrollUp();
  }, []);

  const { scrollYProgress } = useScroll();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { md, twoxl } = useWidth();

  return (
    <div id='home-page' className='page-transition'>
      <div id="homeTop" style={{ background: "#D3D3D3" }}>
        <motion.div
          id = "progress-bar"
          className="progress-bar"
          style={{ scaleX: scrollYProgress, display: 'none' }}
        />
        <div style={{ textAlign: "center", paddingTop: '3rem'}}>
          <Menu />
        </div>
        <AlertBoxWrapper md={md} />
        <br /> {twoxl && <br />}
        <div className="text-center mb-3">
          {
            twoxl ? <p
            className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl text-black"
            style={{ marginTop: "7rem" }}
            >
              Hi, I'm Robert.
            </p> : (md ?
              <p
              className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl text-black"
              style={{ marginTop: "5rem" }}
              >
                Hi, I'm Robert.
              </p> :
              <p
              className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl text-black"
              style={{ marginTop: "0rem" }}
              >
              Hi, I'm Robert.
              </p>
            )
          }
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              {
                twoxl ? 
                <img
                className="w-40 h-40 p-1 rounded-full ring-2 ring-gray-300"
                style={{ objectFit: "cover" }}
                src={profile}
                alt="Bordered avatar"
                /> :
                <img
                className="w-40 h-40 p-1 rounded-full ring-2 ring-gray-300"
                style={{ objectFit: "cover" }}
                src={profile}
                alt="Bordered avatar"
                />
              }
            </motion.div>
          </div>
          <br />
          <Typing />
          <br />
          <ContactBar twoxl={twoxl} />
        </div>
        <h1
          id="portfolio"
          className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl"
          style={{ textAlign: "center", color: "black", paddingTop: "10px" }}
        >
          Portfolio
        </h1>
        <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
          <PortfolioSlider />
        </div>
        <h1 id = "WorkXP"
          className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl"
          style={{ textAlign: "center", color: "black", paddingTop: "10px" }}
        >
          Work Experience
        </h1>
        <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
          <WorkSlider />
        </div>
        <Reviews reviewsData={reviewsData} />
      </div>
      <br /><br />
    </div>
  );
};

export default Home;