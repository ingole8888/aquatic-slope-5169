import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Reciepes from "./Components/Reciepes";
import Signup from "./Components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <>
    <div>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reciepes" element={<Reciepes />} />
            </Routes>
          </UserAuthContextProvider>
    </div>
    </>
  );
}

export default App;
