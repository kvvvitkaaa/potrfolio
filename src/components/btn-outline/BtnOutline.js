import gitBlack from "../../images/icons/gitHub-black.jpg";

import "./style.css";

const BtnOutline = () => {
    return (
        <a href="#!" className="btn-outline">
            <img src={gitBlack} alt="" />
            GitHub repo
        </a>
     );
}
 
export default BtnOutline;