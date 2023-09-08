import "./style.css";

const Header = () => {
    return (
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
    );
}
 
export default Header;