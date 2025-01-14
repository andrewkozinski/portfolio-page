import { setTitle, setFavicon } from "../funcs";
import ProjectsPng from "../resources/images/projects.png";
import Navbar from "../components/Navbar";
import InfoTab from "../components/InfoTab";
import "../App.css";

const Projects = () => {

    setTitle("Projects - Andrew Kozinski");
    setFavicon(ProjectsPng);

    return (
        <>
            <Navbar/>
            <div className="main-body" id="main-body">
                <InfoTab text="Projects" content={<>Project Page Placeholder. As of now, my previous projects are not yet displayed. Check back here at a later date.</>}/>
                {/*TODO: Fetch projects from the JSON file and display them.*/}
                {/*Potentially have pages for each project that will be loaded based on the url? Look into this later.*/}
            </div>
        </>
    );
}
export default Projects;