import Contacts from "./components/contacts/Contacts";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import React from "./app.scss";
function App() {
  return (
    <div className="app">
        <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
