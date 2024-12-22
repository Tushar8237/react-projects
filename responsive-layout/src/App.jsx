import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
