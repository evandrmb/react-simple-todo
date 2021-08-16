import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes></Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
