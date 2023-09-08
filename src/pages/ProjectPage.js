import { useParams } from "react-router-dom";

import { projects } from "../helpers/projectsList";

import BtnOutline from "../components/btn-outline/BtnOutline";


const ProjectPage = () => {

    const {id} = useParams();
    const project = projects[id];

    return ( 
    <main className="section">
        <div className="container">
            <div className="project-details">
                <h1 className="title-1">
                    {project.title}
                </h1>
                <img src={project.imgBig} alt={project.title} className="project-details__img" />
                <div className="project-details__descript">
                    <p>{project.skills}</p>
                </div>
                <BtnOutline />
            </div>
        </div>
    </main>
     );
}
 
export default ProjectPage;