//hooks
import { useState } from "react";
//icons
import { Icon } from "@iconify/react";

const Email = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleClick = () => {
    navigator.clipboard.writeText("akashrattan43@gmail.com");
    setCopySuccess("copied!");
    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  };

  return (
    <div className="emailContainer">
      <small className="copySuccess">{copySuccess}</small>
      <Icon icon="bx:copy" className="copyIcon" onClick={handleClick} />

      <a href="mailto:akashrattan43@gmail.com" className="email">
        akashrattan43@gmail.com
      </a>

      <div className="line"></div>
    </div>
  );
};

export default Email;
