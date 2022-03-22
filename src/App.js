import "./App.css";
import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import LastTask from "./components/LastTask/LastTask";

function App() {
  let functionArr = (arr) => {
    console.log(arr);
  };
  return (
    <div className="App">
      <Header image="https://wallpapercave.com/wp/wp4587060.jpg" />
      <Section />
      <Footer />
      <LastTask functionArr={functionArr} />
    </div>
  );
}

export default App;
