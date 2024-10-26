import "../App.css";
import Navbar from "../components/Navbar";
import ResumePdf from "../resources/pdfs/Resume - Andrew Kozinski.pdf"

const Resume = () => {

    return (
        <>
            <Navbar />
            <div className="main-body" id="main-body" style={{ height: "100vh", overflow: "hidden" }}>
                <iframe
                    src={ResumePdf}
                    width="100%"
                    height="100%"
                    title="Resume"
                    style={{ border: "none", marginTop: "20px", height: "calc(100vh - 20px)" }}
                />
            </div>
        </>
        
    );

}

export default Resume;