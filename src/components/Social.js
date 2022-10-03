//icons
import { Icon } from "@iconify/react";

const Social = () => {
  return (
    <ul className="socialLinksContainer">
      <li className="socialIconContainer" title="Github">
        <a href="https://github.com/akashrattan43" target={"_blank"}>
          <Icon icon="fa6-brands:github-square" className="socialIcon" />
        </a>
      </li>
      <li className="socialIconContainer" title="Linkedin">
        <a href="https://www.linkedin.com/in/akashrattan" target={"_blank"}>
          <Icon icon="fa6-brands:linkedin" className="socialIcon" />
        </a>
      </li>
      <li className="socialIconContainer" title="Instagram">
        <a href="https://www.instagram.com/akaypool" target={"_blank"}>
          <Icon icon="fa6-brands:instagram-square" className="socialIcon" />
        </a>
      </li>
      <li className="line"></li>
    </ul>
  );
};

export default Social;
