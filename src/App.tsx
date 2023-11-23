import NavBar from "./components/NavBar";
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TitleScreen from "./screens/TitleScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <>
          <div className="sticky top-0">
            <NavBar />
          </div>
          <Routes>
            <Route path="/title" element={<TitleScreen />} />
            <Route path="/login" element={<LogInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
