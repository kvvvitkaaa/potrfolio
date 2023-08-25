import "./styles/styles.css";

import sun from "./images/icons/Sun.svg";
import moon from "./images/icons/Moon.svg";

import instagram from "./images/icons/insta.png";
import github from "./images/icons/github.png";
import linkedin from "./images/icons/linkedin.png";


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="container">
            <div className="nav-row">
              <a className="logo" href="./index.html">Kvitka Alyona</a>

              <a href="#!" className="btn-mode">
                    <img className="btn-mode__icon" src={sun} alt="Light mode" />
                    <img className="btn-mode__icon" src={moon} alt="Dark mode" />
              </a>

              <ul className="routes">
                <li className="routes-item"><a href="./index.html" className="routes-item__link routes-item__link--active">Projects</a></li>
                <li className="routes-item"><a href="./skills.html" className="routes-item__link">Skills</a></li>
                <li className="routes-item"><a href="./contacts.html" className="routes-item__link">Contacts</a></li>
              </ul>
            </div>
        </div>
      </nav>

      <header className="header">
        <div className="header-container">
          <h1 className="header-title">
            <strong>Hi, my name is <em>Alyona</em></strong><br />
            a frontend developer
          </h1>
          <div className="header-text">
            <p>with passion for learning and creating</p>
          </div>
          <a className="btn" href="#!">Download CV</a>
        </div>
    </header>
    

    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <ul className="contacts">
            <li className="contacts-item">
              <a href="#!">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li className="contacts-item">
              <a href="#!">
                <img src={github} alt="GitHub" />
              </a>
            </li>
            <li className="contacts-item">
              <a href="#!">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;
