//components
import Project from "./Project";
import OtherProject from "./OtherProject";
//icons
import { Icon } from "@iconify/react";
//hooks
import { useState } from "react";

const projects = [
  {
        title: 'Crypto Coins Track App',
        tech: ['react', 'hooks', 'context-api', 'async-await', 'firebase', 'user-auth', 'database', 'storage'],
        extraInfo: "Crypto watchlist app with CoinGecko API, React Router DOM to navigate different Coin Pages with Firebase Authentacation Login/SignUp database running in the background + Giving user the ability to save and remove Coins from the watchlist with real time interaction.",
        images: ['/c1.png', '/c2.png', '/c3.png'],
        repo: 'https://github.com/akashrattan43/',
        link: 'https://cryptobase-yt.web.app/',
        type: 'personal project'
    },
    {
        title: 'Best Eat App',
        tech: ['react', 'mapbox-gl-js', 'context-api', 'async-await', 'fetch-api', 'high-order-functions', 'css-animations'],
        extraInfo: 'Frontend app a clone of Uber purely based on Tailwind css and React js pulling data from Graphql api + fully responsive on all devices.',
        images: ['/b1.png', '/b2.png', '/b3.png'],
        repo: 'https://github.com/akashrattan43/food-app-frontend',
        link: 'https://burger-delicious-app.netlify.app/',
        type: 'personal project'
    },
  {
    title: "Filpire Movie Database app",
    tech: [
      "react",
      "tailwind-css",
      "async-await ",
      "fetch api",
      "high order functions",
      "local storage",
    ],
    extraInfo:
      "Find your favourite movies and save them to your watchlist. Check the latest, top or upcoming movies or search the films you want with the searchbar. Click on a movie to view movie details. movie data was retrieved from a public api",
    images: ['/f.png'],
    repo: "https://github.com/akashrattan43/",
    link: "https://filmpire.netlify.app/",
    type: "personal project",
  },
  {
    title: "Musically",
    tech: [
      "react",
      "tailwind-css",
      "async-await ",
      "fetch api",
      "high order functions",
      "local storage",
    ],
    extraInfo:
      "A chill music app syncing data with chill cow music api. Just like apple music user can play pause, next, and prev any song on the list + fully responsive.",
    images: ['/m.png'],
    repo: "https://github.com/akashrattan43/music-app",
    link: "https://music-chill.netlify.app/",
    type: "personal project",
  }
];

const otherProjects = [
  {
    title: "Hacker News",
    tech: ["react", "css", "aync", "useEffect", "useContext"],
    extraInfo:
      'A "Frontend Mentor" challenge where the goal is to build out a news app fetching data from an tech news API',
    images: [""],
    repo: "https://github.com/Akashrattan43",
    link: "https://react-projects-22-hacker-news.netlify.app/",
    type: "challenge project",
  },
  {
    title: "Stripe Copy",
    tech: ["react", "react-hooks", "css", "responsive"],
    extraInfo:
      "A frontend fully responsive stripe website clone.",
    images: [""],
    repo: "https://github.com/Akashrattan43",
    link: "https://react-projects-13-stripe-submenus.netlify.app/",
    type: "personal project",
  }
];

const MyProjects = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="container" id="myProjects">
      <h2 className="containerHeader">
        <span className="red">02.</span>myProjects
      </h2>
      <div className="projectsContainer">
        {projects &&
          projects.map((project) => (
            <Project
              key={project.title}
              type={project.type}
              title={project.title}
              details={project.extraInfo}
              link={project.link}
              repo={project.repo}
              techs={project.tech}
              images={project.images}
            />
          ))}
      </div>

      <div className={`otherProjectsContainer ${viewMore ? "grow2" : ""}`}>
        <h2 className="containerSubHeader otherProjectsSubHeader">
          <span className="red">//</span>otherProjects
        </h2>
        <div className="otherProjectGrid">
          {otherProjects &&
            otherProjects.map((project) => (
              <OtherProject
                title={project.title}
                tech={project.tech}
                extraInfo={project.extraInfo}
                repo={project.repo}
                link={project.link}
                type={project.type}
                key={project.title}
              />
            ))}
        </div>
      </div>

      <div
        className="btn btn-primary viewMoreProjects"
        onClick={() => setViewMore(!viewMore)}
      >
        {viewMore ? "close" : "otherProjects"}
        {viewMore ? (
          <Icon icon="charm:chevron-up" className="chevronIcon" />
        ) : (
          <Icon icon="ci:chevron-big-down" className="chevronIcon" />
        )}
      </div>
    </div>
  );
};

export default MyProjects;
