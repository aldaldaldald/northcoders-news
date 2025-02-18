import "./App.css";

import NavigationBar from "./components/NavBar";
import Articles from "./pages/Articles";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Articles />
    </div>
  );
}

export default App;
