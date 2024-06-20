import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, Card, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import tripPlanner from "../../assets/tripPlanner.jpg";
import bookBlog from "../../assets/bookBlog.jpg";
import jokeGenerator from "../../assets/jokeGenerator.jpg";
import recycleAI from "../../assets/recycleAI.jpg";
import myHealth from "../../assets/HealthApp.jpg";
import { PortfolioItem } from 'types';
import React from 'react';

const CardProp = ({ color, title, description, category, links }: PortfolioItem): React.JSX.Element => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundColor: `${color}`, height: '25rem' }}
      className={`${classes.card}`}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Text className={classes.category} size="xs">
          {description}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <div style={{ position: 'absolute', bottom: '1rem' }}>
      {
        links?.map((link): React.ReactNode => {
          return (
            <a href={link.link} target='_blank' className='mr-3'>
              <Button variant="white" color="dark">
                {link.name}
              </Button>
            </a>

          )
        })
      }
      </div>
    </Paper>
  );
}
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    image: bookBlog,
    title: "Book Blog App",
    category: "Web Development",
    description: "Python, JavaScript, Flask, HTML, CSS",
    color: '#95D2B3',
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
    id: "2",
    title: "Trip Planning App",
    image: tripPlanner,
    category: "Mobile App Development",
    description: "Dart, Python, Flask, Firebase, PostgreSQL",
    color: 'beige',
    links: [
      {
        id: "1",
        link: "https://github.com/rsun19/Trip-Planner-App",
        name: "View source code",
      },
    ],
  },
  {
    id: "3",
    image: jokeGenerator,
    title: "Joke Generator App",
    category: "Fullstack and iOS Development",
    description: "JavaScript, React.js, Swift, Python, Flask",
    color: '#BACD92',
    links: [
      {
        id: "1",
        link: "https://github.com/rsun19/jokegenerator",
        name: "View source code",
      },
    ],
  },
  {
    id: "4",
    image: recycleAI,
    title: "Image Classifier App",
    category: "ML/AI",
    description: "Python, Flask, PyTorch",
    color: '#EEA5A6',
    links: [
      {
        id: "1",
        link: "https://github.com/rsun19/RecycleImageClassifier_dev",
        name: "View source code",
      },
    ],
  },
  {
    id: "5",
    image: myHealth,
    title: "Mental Health App",
    category: "iOS Development",
    color: '#B0A695',
    description: "Swift",
  },
];

export default function PortfolioSlider() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = portfolioItems.map((item) => (
    <Carousel.Slide key={item.id}>
      <CardProp {...item} />
    </Carousel.Slide>
  ));

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <h1 className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl"
            style={{ textAlign: "center", color: "black", paddingTop: "10px" }}
          >
            Portfolio
      </h1>
      <Carousel
        slideSize={{ base: '100%', sm: '50%'}}
        slideGap={{ base: rem(2), sm: 'xl' }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Card>
  );
}