import "./App.css";
import Footer from "./components/footer/Footer";
import Banner from "./components/homepage/banner/Banner";
import Products from "./components/homepage/digitalProduct/Products";
import Pricing from "./components/homepage/pages/Pricing";
import ReadyTransform from "./components/homepage/pages/ReadyTransform";
import States from "./components/homepage/pages/States";
import Steps from "./components/homepage/pages/Steps";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <States></States>
      <Products></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <ReadyTransform></ReadyTransform>
      <Footer></Footer>
    </>
  );
}

export default App;
