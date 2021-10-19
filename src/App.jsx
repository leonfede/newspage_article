import Aos from "aos";
import "aos/dist/aos.css";
import 'react-image-lightbox/style.css';
import { useEffect } from "react";
import { Article } from "./pages";
import { NavigationBar, Footer } from "./components";


function App() {

  useEffect(() => {
    Aos.init({ disable: window.innerWidth < 768 });
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Article />
      <Footer />
    </div>
  );
}

export default App;