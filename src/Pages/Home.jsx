import { useEffect } from "react"
import Bio from "../Comps/common/home/Bio"
import Projects from "../Comps/common/home/Projects"
import '../CSS/home.css'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-left">
        <Bio />
      </div>
      <div className="home-right">
        <Projects />
      </div>
    </div>
  )
}

export default Home