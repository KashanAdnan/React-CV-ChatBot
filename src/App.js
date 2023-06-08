import img from "./assets/Main.jpg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="img section">
        <img src={img} alt="" />
        <div className="skills">
          <h1>My Skills</h1>
          <div className="skill">
            <h3>HTML</h3>
            <div className="skill_level">
              <div className="skill__leve html"></div>
            </div>
          </div>
          <div className="skill">
            <h3>CSS</h3>
            <div className="skill_level">
              <div className="skill__leve css"></div>
            </div>
          </div>
          <div className="skill">
            <h3>JS</h3>
            <div className="skill_level">
              <div className="skill__leve js"></div>
            </div>
          </div>
          <div className="skill">
            <h3>NODE JS</h3>
            <div className="skill_level">
              <div className="skill__leve node"></div>
            </div>
          </div>
          <div className="skill">
            <h3>MONGO DB</h3>
            <div className="skill_level">
              <div className="skill__leve db"></div>
            </div>
          </div>
          <div className="skill">
            <h3>EXPRESS JS</h3>
            <div className="skill_level">
              <div className="skill__leve express"></div>
            </div>
          </div>
          <div className="skill">
            <h3>REACT JS</h3>
            <div className="skill_level">
              <div className="skill__leve react"></div>
            </div>
          </div>
          <div className="skill">
            <h3>WORDPRESS</h3>
            <div className="skill_level">
              <div className="skill__leve word"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about section">
        <div className="about_container">
          <h1>About Me</h1>
          <p>
            Hi , I am a MERN STACK web Developer. I have Learned MERN STACK Web
            Development. I have 2 Years of Expericence Larning & Development . I
            am 11 years old.
          </p>
        </div>
        {/* <hr /> */}
        <div className="experice">
          <h1>Expericene</h1>
          <p>
            Freelancing as a Full stack Developer on fivver upwork . Developing
            New Project with MERN STACK HTML , CSS , JS , Bootstrap 5 , Tailwind
            CSS and have 2 years of experience building developing and hosting.
            I can do any Type Of Clone Website (Mern Stack) and frontend and
            backend
          </p>
        </div>
        {/* <hr /> */}
        <div className="contact">
          <h1>Contact Me</h1>
          <ul>
            <li>03456276264</li>
            <li>kashanadnan.netlify.app</li>
            <li>Kashan Adnan</li>
            <li>khanzaidaboy@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
