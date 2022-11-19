import About from "./components/About";
import Footer from "./components/Footer"
import Info from "./components/Info";
import Interests from "./components/Interests";


export default function App() {
  return (
      <div>
        <Info />
        <div id="main-content">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
  );
}

