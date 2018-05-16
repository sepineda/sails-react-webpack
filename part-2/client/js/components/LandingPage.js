import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar';
import Home from './home/Home';
import Contact from './contact/Contact';
import More from './more/More';

export default function LandingPage() {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/more" component={More} />
        </main>
      </div>
    </Router>
  );
}
