import './App.css';
import Home from "./Components/Home.jsx"
function App() {
  return (
    <>
    <div className="App">
      <Home/>
    </div>
    </>
  );
}

export default App;
// import { Container, Row, Col } from "react-bootstrap";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./Components/Navbar"
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import { UserAuthContextProvider } from "./context/UserAuthContext";

// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Container style={{ width: "400px" }}>
//       <Row>
//         <Col>
//           <UserAuthContextProvider>
//             <Routes>
//               <Route
//                 path="/home"
//                 element={
//                   <ProtectedRoute>
//                     <Home />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route path="/" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//             </Routes>
//           </UserAuthContextProvider>
//         </Col>
//       </Row>
//     </Container>
//     </>
//   );
// }

// export default App;
