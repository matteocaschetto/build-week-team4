import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-datetime/css/react-datetime.css";
import { Footer } from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Profile from "./components/Profile";
import Jobs from "./components/Jobs";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
