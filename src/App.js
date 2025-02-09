import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Blogfive from './Component/Blogfive/Blogfive';
import Blogfour from './Component/Blogfour/Blogfour';
import Blogone from './Component/Blogone/Blogone';
import Blogthree from './Component/Blogthree/Blogthree';
import Blogtwo from './Component/Blogtwo/Blogtwo';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Team from './Component/Team/Team';
import Footer from './Layout/Footer/Footer';
import Navbar from './Layout/Navbar/Navbar';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Weightberg</title>
                <meta name="description" content="Weightberg" />
      </Helmet>
       <Router >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog_1" component={Blogone} />
          <Route exact path="/blog_2" component={Blogtwo} />
          <Route exact path="/blog_3" component={Blogthree} />
          <Route exact path="/blog_4" component={Blogfour} />
          <Route exact path="/blog_5" component={Blogfive} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
        </Switch>
        <Footer />
       </Router>
    </div>
  );
}

export default App;
