import "../styles/App.css";
import Footer from "./Footer";
import Header from "./Header.js";
import TinderCards from "./TinderCards";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* TinderCard */}
      <TinderCards />
      {/* Buttons */}
      <Footer />
    </div>
  );
}

export default App;
