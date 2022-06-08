import { useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { androids } from "./demoData/DemoData";

const App = () => {
  const [product, setProduct] = useState(androids);
  return (
    <div className="flex overflow-y-hidden">
      <Sidebar />
      <div className="h-screen flex-1 p-7">
        <NavBar/>
        <Card androids={product} />
      </div>
    </div>

 
    

  );
};
export default App;
