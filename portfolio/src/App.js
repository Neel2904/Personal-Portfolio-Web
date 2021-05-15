import './App.scss';
import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import NavBar from './Components/NavBar';

//Pages
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogsPage from './Pages/Blogspage';
import ContactPage from './Pages/ContactPage';


function App() {

  const [navToggle, setNavToggle] = useState(false);

  const navClick = ()=>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ``}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="nav-btn-burger">
          <div className={`${navToggle ? `cross` : `dash`}`}>
          </div>
        </div>
        {/* <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div> */}
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfolioPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div> 
      </div>
    </div>
  );
}

export default App;
