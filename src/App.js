import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Campaign from "./pages/Campaign";
import Petition from "./pages/Petition";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="tavoitteet" element={<Campaign />}></Route>
          <Route path="vetoomus" element={<Petition />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
