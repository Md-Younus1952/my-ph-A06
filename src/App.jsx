import "./App.css";
import Footer from "./components/footer/Footer";
import Banner from "./components/homepage/banner/Banner";
import ReadyTransform from "./components/homepage/pages/ReadyTransform";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ReadyTransform></ReadyTransform>
      <Footer></Footer>
    </>
  );
}

export default App;
