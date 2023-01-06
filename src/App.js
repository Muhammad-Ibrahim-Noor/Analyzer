import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" />

      <div className="container my-3">
        <About />
        <Textform heading="Enter the text below to analyze" />
      </div>
    </>
  );
}

export default App;
