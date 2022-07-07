import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="sections">
      <Nav/>
      <About/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
