import instagram from "../../images/icons/insta.png";
import github from "../../images/icons/github.png";
import linkedin from "../../images/icons/linkedin.png";

import "./style.css";

const Footer = () => {
    return ( 
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
    );
}
 
export default Footer;