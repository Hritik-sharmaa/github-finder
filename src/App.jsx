import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import User from "./routes/User";
import Footer from "./components/Footer";
import { useRef, useState } from "react";
import UIserData from "./routes/UIserData";

function App() {
  const userRef = useRef('')
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate()

  const handleSearch = () => {
    setSearchQuery(userRef.current.value);
    navigate('/');
  };
  return (
    <>
      <div className="bg-gray-950 min-h-screen">
        <div>
          <Header userRef={userRef} onSearch={handleSearch}/>
        </div>
        <Routes>
          <Route path="/" element={<User searchQuery={searchQuery}/>} />
          <Route path="/:name" element={<UIserData/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
