import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import User from "./routes/User";
import Footer from "./components/Footer";
import { useRef, useState } from "react";
import UserData from "./routes/UserData";

function App() {
  const userRef = useRef('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchQuery(userRef.current.value);
    navigate('/');
  };

  return (
    <>
      <div className="bg-gray-950 min-h-screen flex flex-col justify-between">
        <Header userRef={userRef} onSearch={handleSearch} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<User searchQuery={searchQuery} />} />
            <Route path="/:name" element={<UserData />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
