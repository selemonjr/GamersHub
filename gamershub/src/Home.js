import { useEffect,useRef } from "react";
const Home = ({timeline}) => {
  let logo = useRef(null);
  let content = useRef(null);
  let git = useRef(null);
  useEffect(() => {
    timeline.from(logo,{
      duration:1,
      opacity:0,
      x:-100,
    });

    timeline.from(content,{
      delay:.5,
      duration:2,
      opacity:0,
      x:-100,
    });

    timeline.from(git,{
      duration:1,
      opacity:0,
      x:100,
    });

  })

    return (
        <div>
            <div className="banner">
      <div className="bannerNavigation">
      <div className="bannerTitle" ref={el => logo = el}><h1>G<span className="text-flicker-in-glow">A</span>MERSHUB</h1></div>
      <div className="bannerLink">
        <ul>
          <li ref={el => git = el}><a href="https://github.com/selemonjr" target="_blank"><i class="fab fa-github"></i></a></li>
        </ul>
      </div>
      </div>
      <div className="bannerContent" ref={el => content = el}>
        <div className="content">
          <h1 className="bannerGame">G<span className="text-flicker-in-glow">O</span>D OF WAR</h1>
          <p className="gameDesc">In contrast to the Greek pantheon, God of War set Kratos on a new journey with the Norse world, leaving his old life behind and seeking a new life with his son Atreus.</p>
          <button className="bannerButton">Explore Journey</button>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Home
