import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import User from "./routes/User";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  let searchUser = null;
  const userRef = useRef('')
  return (
    <>
      <div className="bg-gray-950 min-h-screen  ">
        <div>
          <Header userRef={userRef}/>
        </div>
        <Routes>
          <Route path="/" element={<User userRef={userRef}/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
