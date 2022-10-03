//icons
import { Icon } from "@iconify/react";

const MenuSocial = () => {
  return (
    <ul className="menuSocialLinksContainer">
      <li className="menuSocialIconContainer" title="Github">
        <a href="https://github.com/akashrattan43" target={"_blank"}>
          <Icon icon="fa6-brands:github-square" className="menuSocialIcon" />
        </a>
      </li>
      <li className="menuSocialIconContainer" title="Linkedin">
        <a href="https://www.linkedin.com/in/akashrattan" target={"_blank"}>
          <Icon icon="fa6-brands:linkedin" className="menuSocialIcon" />
        </a>
      </li>
      <li className="menuSocialIconContainer" title="Instagram">
        <a href="https://www.instagram.com/akaypool" target={"_blank"}>
          <Icon icon="fa6-brands:instagram-square" className="menuSocialIcon" />
        </a>
      </li>
      {/* <li className='line'></li> */}
    </ul>
  );
};

export default MenuSocial;
