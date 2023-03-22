import "./App.css";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog/Blog";
import { Contato } from "./pages/Contato/Contato";
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/usuarios" element={<Usuarios/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
