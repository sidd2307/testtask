import Card from "./components/Card";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PaginationBox from "./components/PaginationBox";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Messages from "./components/Messages";

function Home() {
  return (
    <div>
      <NavBar />
      <Cards />
      <PaginationBox />
      <Footer />
    </div>
  )
}

function Messages1() {
  return (
    <div>
      <NavBar />
      <Messages />
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route path="/messages" element={<Messages1 />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    // <div className="App">
    //   <NavBar />
    //   <Cards />
    //   <PaginationBox />
    //   <Footer />
    // </div>
  );
}

export default App;
