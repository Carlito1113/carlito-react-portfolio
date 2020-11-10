import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// MY COMPONENTS
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Carlito Algarin',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
         title: 'Focus. Execute.',
         subTitle: 'Projects that matter',
         Text: 'Checkout my work below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

    // displays content to the page
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Carlito Algarin</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/" exact render={() => <ContactPage title={this.state.contact.title} />} />


          <Footer />

        </Container>
      </Router>
    );
  }
}


export default App;
