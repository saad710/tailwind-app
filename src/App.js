import { useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { androids } from "./demoData/DemoData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const App = () => {
  const [product, setProduct] = useState(androids);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7">
        <NavBar/>
        <Card androids={product} />
        <Footer/>
      </div>
    </div>


  );
};
export default App;
