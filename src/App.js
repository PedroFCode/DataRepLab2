import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Read } from './components/read';
import { Create } from './components/create';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter  as Router,
  Routes,
  Route }
  from 'react-router-dom';

//Inherits from react.component designed by react
//allows us to write components
//ctrl + k, ctrl + c for components
class App extends React.Component {
  render() {
    
      return (
        <Router>
      <div className="App">
        {/* Nav bar is imported to allow us to change what is displayed in
        the single page app */}
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* Allows us to create links for different components on navbar */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/content">Content</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Routes allows us to move between components */}
        {/* Components are imported from the different classes in components
        folder */}
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='/content' element={<Content />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path='/read' element={<Read />}></Route>
          <Route path='/create' element={<Create />}></Route>
        </Routes>

        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}



      </div>
    </Router>
    );
  }
}

export default App;
