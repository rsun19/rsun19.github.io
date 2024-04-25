import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import redhat from "../assets/redhat.webp";
import uva1 from "../assets/uva1.jpeg";

interface portfolioItem {
  id: string;
  title: string;
  photo: string;
  description: string;
}

const WorkSlider = () => {
  const portfolioItems: portfolioItem[] = [
    {
      id: "1",
      title: "Software Engineer Intern At Red Hat",
      photo: redhat,
      description:
        "Worked on the console.redhat.com website using TypeScript, Go, React, and Cypress.",
    },
    {
      id: "2",
      photo: uva1,
      title: "CS Teaching Assistant at University of Virginia",
      description:
        "Graded assignments and held office hours for a class of over 440 students.",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
  };

  return (
    <Slider {...settings} className="carousel-container">
      {portfolioItems.map((item) => (
        <div id={item.id} style={{ marginLeft: "40px", marginRight: "40px" }}>
          <div className="max-w-full rounded-lg overflow-hidden">
            <div className="bg-white">
              <img
                src={item.photo}
                alt="Images"
                style={{ margin: "auto", maxHeight: "50vh", width: "auto" }}
              />
            </div>
            <div className="bg-teal-500">
              <div className="pr-12 pl-12 pb-6 pt-3 lg:pt-6 lg:pb-12">
                <div className="font-bold text-xl mb-2 text-white 2xl:text-2xl 4xl:text-4xl 5xl:text-5xl">
                  {item.title}
                </div>
                <p className="text-white text-base text-lg 2xl:text-xl 4xl:text-3xl 5xl:text-4xl">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default WorkSlider;
