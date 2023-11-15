

import './education.css'
import { Helmet } from "react-helmet"
function Education({toggle}) {
    return (
        <>
        <Helmet>
         <title>My Education</title>
        </Helmet>
        <div style={toggle?{backgroundColor:"black",transition:"all 0.5s ease"}:{backgroundColor:"white",transition:"all 0.5s ease"}} className="educationContainer d-flex justify-content-start align-items-center flex-column gap-5">
        <h1 style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>My Resume</h1>
        <div className="MyEducation  ">
        <div className="DeveloperResume  d-flex justify-content-start align-items-start flex-column gap-5 ">
        <h3 style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>My internship / Learn</h3>
         <div  style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}} className="block">
         <p>Shirvanyan Youth Center: <br /> Student 2019 - 2021</p>
         </div>
         <div style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}  className="block">
         <p>Elbakyan Soft: Student</p>
         </div>
         <div style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}  className="block">
         <p>Internship: Full Learning. <br />
          <span>Programming Language: HTML,CSS,Javascript,
            SASS/SCSS,BOOTSTRAP,ReactJS,GitHub,GIT,NPM</span>
         </p>
         </div>
        </div>
        <div className="skillsBlock d-flex justify-content-start align-items-center flex-column gap-3">
          <h3 style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>My Skills</h3>
         <div  className="line">
            <span style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>HTML</span>
            <div className="percentLine"> 
            <div className="progress  progress_1"></div>
            </div>
         </div>
         <div className="line">
            <span style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>CSS</span>
            <div className="percentLine">
            <div className="progress progress_2"></div>
            </div>
         </div>
         <div className="line">
            <span style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>Sass/Scss</span>
            <div className="percentLine">
            <div className="progress progress_3"></div>
            </div>
         </div>
         <div className="line">
            <span style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>Bootstrap</span>
            <div className="percentLine">
            <div className="progress progress_4"></div>
            </div>
         </div>
         <div className="line">
            <span style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>JavaScript</span>
            <div className="percentLine">
            <div className="progress progress_5"></div>
            </div>
         </div>
         <div className="line">
            <span style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>ReactJS</span>
            <div className="percentLine">
            <div className="progress progress_6"></div>
            </div>
         </div>
         <div className="line">
            <span style={toggle?{color:"white",transition:"all 0.5s ease"}:{color:"black",transition:"all 0.5s ease"}}>Git/GitHub</span>
            <div className="percentLine">
            <div className="progress progress_7"></div>
            </div>
         </div>
        </div>
        </div>
        </div>
    
     
        </>
    )
}

export default Education