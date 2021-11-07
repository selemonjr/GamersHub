import Home from "./Home";
import Games from "./Games";
import Footer from "./Footer";
import gsap from "gsap";
const App = () => {
  let timeline = gsap.timeline();
  return (
    <>
    <Home  timeline= {timeline}/>
    <Games/>
    <Footer/>
    </>
  )
}
export default App;
