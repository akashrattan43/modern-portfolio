const Hero = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="heroContainer">
      {menuOpen && (
        <div className="darkOverlay" onClick={() => setMenuOpen(false)}></div>
      )}
      <div className="innerHero">
        <div className="leftInnerHero">
          <div className="avatarContainer">
                        <img src='/akash.jpg' alt="avatar" />
                    </div>
                    <div className="avatarContainerShadow"></div>
          <h1 className="heroIntroHeading">
            hello, i'm <span className="firstNameHero">Akash</span>,
          </h1>
          <p className="heroIntroParagraph">
            a front-end web developer who loves to build applications for the
            web.
          </p>
        </div>
        <div className="rightInnerHero">
          <div>
            <p>{"dev {"}</p>
            <br />
            <p className="code firstNameCode">{'firstName : "Akash",'}</p>
            <p className="code lastNameCode">{'lastName : "Rattan",'}</p>
            <p className="code infoCode">
              {'info : "passionate Front End web developer"'}
            </p>
            <br />
            <p>{"};"}</p>
          </div>
          <div>
            <a href="#myProjects" className="btn btn-primary heroButton">
              viewProjects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
