import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import CreatePost from "./components/CreatePost";
import PostContextProvider from "./store/post-list-store";
function App() {
  return (
    <PostContextProvider>
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="content">
          <Navbar></Navbar>
          <center>
            <CreatePost></CreatePost>
            <Cards></Cards>
          </center>
          <Footer></Footer>
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;
