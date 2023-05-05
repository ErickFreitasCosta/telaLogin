import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import Logo from '../image/CRIAgym.jpg'
import { Link } from 'react-router-dom';

function BrandExample() {
  return (
    
    <div className='header'>
      
        <Navbar bg="dark" variant="dark" className='header'>
          <Container className='header2'>
            <Navbar.Brand href="#home" className='header-center'>
              <img
                alt=""
                src={Logo}
                width="70"
                height="60"
                className="d-inline-block align-top"
              />{' '}
               
              <Link to={'/'} className='info-nav'> Tela Iniciall</Link>
        
              
            </Navbar.Brand>
          </Container>
        </Navbar>
    </div>
   
  );
}

export default BrandExample;