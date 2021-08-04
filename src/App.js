import "./App.scss";
import { Router, Route } from "wouter";
import SignUpForm from "./components/SignUpForm/SignUpForm"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={SignUpForm} />
      </Router>
    </div>
  );
}

export default App;
