//icons
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="goToTop" title="Go to top">
        <Icon className="upArrowIcon" icon="bi:arrow-up-square-fill" />
      </a>
      <small>
        Copyright &copy; 2022 -{" "}
        <a
          href="https://github.com/akashrattan43"
          className="githubLink"
          target="_blank"
        >
          https://github.com/akashrattan43
        </a>
      </small>
    </footer>
  );
};

export default Footer;
