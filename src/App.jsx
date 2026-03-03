import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;