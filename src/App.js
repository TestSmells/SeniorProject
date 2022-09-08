import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Weekly from './pages/Weekly';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/weekly">Weekly Updates</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Container className="mt-10">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/weekly" element={<Weekly />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
