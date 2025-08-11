import React, { useEffect, useState } from "react";
import PortfolioSlider from "./carousel/PortfolioSlider";
import "font-awesome/css/font-awesome.min.css";
import profile from "../assets/myImage.jpg";
import haarlam from "../assets/haarlam.jpg";
import Reviews from "./Reviews/Reviews";
import { motion, useScroll } from "framer-motion";
import Menu from "./Menu";
import ContactBar from "./ContactBar";
import WorkTimeline from "./Timeline/Timeline";
import { Review } from "types";
import { fetchReviewsData } from "../api/fetchReviewsData";
import { Flex } from "@mantine/core";

const Home = (): React.JSX.Element => {
  const [reviewsData, setReviewsData] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviewsData(setReviewsData);
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

  return (
    <div id="home-page" className="page-transition">
      <div id="homeTop" style={{ background: "#D3D3D3" }}>
        <motion.div
          id="progress-bar"
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div
          id="homepage"
          className="min-h-screen relative"
          style={{
            backgroundImage: `url(${haarlam})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div style={{ textAlign: "center", paddingTop: "3rem" }}>
            <Menu />
          </div>
          <div
            className="absolute left-1/2 top-1/2 flex flex-col items-center gap-9"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <p className="text-3xl text-white">Hi, I&apos;m Robert</p>
            <Flex align="center" justify="center" gap="sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img
                  className="w-40 h-40 p-1 rounded-full ring-2 ring-gray-300"
                  style={{ objectFit: "cover" }}
                  src={profile}
                  alt="Bordered avatar"
                />
              </motion.div>
            </Flex>
            <ContactBar />
            <a href="#WorkXP">
              <i className="fa fa-arrow-down fa-2x text-white" />
            </a>
          </div>
        </div>
        <div
          id="WorkXP"
          style={{
            paddingTop: "10px",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <WorkTimeline />
        </div>
        <div
          id="portfolio"
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            paddingTop: "10px",
          }}
        >
          <PortfolioSlider />
        </div>
        <div
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            paddingTop: "10px",
          }}
        >
          <Reviews reviewsData={reviewsData} />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
