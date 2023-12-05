import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <header>
          <Navbar />

          <div
            id="home"
            className={`${styles.paddingX} bg-primary min-h-screen w-full flex-col flex items-center justify-center text-white`}
          >
            <h1 className="text-[50px] xs:text-[80px] md:text-[90px] lg:text-[100px] 3xl:text-[100px] font-bold text-left xs:text-center">
              HI, I'M{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                MD.MUZAHID
              </span>
            </h1>
            <h1 className="text-[30px] xs:text-[50px] md:text-[60px] lg:text-[80px]  text-left xs:text-center mt-5 xs:mt-0">
              I DEVELOP WEB WORLD, AND REACT NATIVE{" "}
              <br className="hidden 3xl:block" /> APPLICATION
            </h1>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
