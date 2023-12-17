import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tripPlanner from ".././assets/tripPlanner.jpg";
import bookBlog from ".././assets/bookBlog.jpg";
import jokeGenerator from ".././assets/jokeGenerator.jpg";
import recycleAI from ".././assets/recycleAI.jpg";
import myHealth from ".././assets/Health App.jpg";
import useHeight from "./changeHeight";

interface link {
  id: string;
  link: string;
  name: string;
}

interface portfolioItem {
  id: string;
  title: string;
  photo: string;
  description: string;
  links: link[];
}

const PortfolioSlider = () => {
  const smH = useHeight();
  const portfolioItems: portfolioItem[] = [
    {
      id: "1",
      title: "Trip Planning App Using Flutter",
      photo: tripPlanner,
      description:
        "Developed a mobile app that allows people to create trip itinenaries, view them on maps, and share them. It application uses Postgres, Flask, Firebase, token-based auth, and SQLite.",
      links: [
        {
          id: "1",
          link: "https://testflight.apple.com/join/f5PW402r",
          name: "Beta test app",
        },
        {
          id: "2",
          link: "https://github.com/rsun19/Trip-Planner-App",
          name: "View source code",
        },
      ],
    },
    {
      id: "2",
      photo: bookBlog,
      title: "Book Blog with Flask",
      description:
        "Developed a book blog using Flask, with Python as its backend and HTML, CSS, Tailwind CSS, and JavaScript for the front end. Users can use their Google Account to log in and create comments.",
      links: [
        {
          id: "1",
          link: "https://www.robertsrandomreviews.com",
          name: "View website",
        },
        {
          id: "2",
          link: "https://github.com/rsun19/book-blog-",
          name: "View source code",
        },
      ],
    },
    {
      id: "3",
      photo: jokeGenerator,
      title: "Joke Generator with Swift, React, and Flask",
      description:
        "Developed a joke generator. I used React for the web component, and Swift for the iMessage extension component. For the backend, I used Flask and Postgres, and served API content.",
      links: [],
    },
    {
      id: "4",
      photo: myHealth,
      title: "Mental Health App with Swift",
      description:
        "Developed a mental health prototype app for a client using Swift. Implemented different kinds of charts with various date ranges so analytics are better tracked.",
      links: [],
    },
    {
      id: "5",
      photo: recycleAI,
      title: "Pytorch",
      description:
        "Developed a model using PyTorch that can classify recyclable items. I trained ResNet18's pre-trained model with thousands of images and the model is 84% accurate on the testing data.",
      links: [
        { id: "1", link: "https://www.recycleai.tech/", name: "View website" },
        {
          id: "2",
          link: "https://github.com/rsun19/RecycleImageClassifier_dev",
          name: "View source code",
        },
      ],
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 9000,
  };

  return (
    <Slider {...settings} className="carousel-container">
      {portfolioItems.map((item) => (
        <div id={item.id} style={{ marginLeft: "40px", marginRight: "40px" }}>
          <div className="max-w-full rounded-lg overflow-hidden">
            <div className="bg-white">
              <img
                src={item.photo}
                alt="Image"
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
                {smH && (
                  <div className="pt-3">
                    {item.links.map((link) => (
                      <span
                        id={link.id}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm 2xl:text-md 4xl:text-xl 5xl:text:2xl font-semibold text-gray-700 mr-2 mb-2"
                      >
                        <a
                          href={link.link}
                          target="_blank"
                          style={{
                            padding: "10px 0px",
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          {link.name}
                        </a>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PortfolioSlider;
