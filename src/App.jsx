import "./App.css";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/NavBar";
import Articles from "./pages/Articles";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <Articles />
      </BrowserRouter>
    </div>
  );
}

export default App;
