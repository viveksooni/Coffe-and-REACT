import "./App.css";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Cards from "../src/components/Cards";
import CreatePost from "../src/components/CreatePost";
import PostContextProvider from "../src/store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <PostContextProvider>
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="content">
          <Navbar></Navbar>
          <center>
            <Outlet></Outlet>
          </center>
          <Footer></Footer>
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;
