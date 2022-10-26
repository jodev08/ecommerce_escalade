import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { Container,Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsEnvelope} from 'react-icons/bs'



const Footer = () => {
  const year = new Date().getFullYear()
  return (
  <footer className='footer'>
    <Container>
     <Row>
      <Col lg="4">
      
      <h1>DREAM ESCALE</h1>
      <p className='footer__text mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem molestias dolorum, vitae hic nam id ullam sint ducimus nostrum illum, distinctio iusto magni necessitatibus, dolor earum quaerat dicta harum?
      </p>
   
      </Col>
       {/*--------------------------------*/}
      <Col lg="3">
        <div className='footer__quick-links'>
          <h4 className='quick__links-title'>top category</h4>
          <ListGroup className='mb-3'>
            
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>shoes</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>accessoire</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>protection</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>clothes</Link>
            </ListGroupItem>

          </ListGroup>
        </div>

      </Col>
       {/*--------------------------------*/}
      <Col lg="2">
     
      <div className='footer__quick-links'>
          <h4 className='quick__links-title'>Lien</h4>
          <ListGroup className='mb-3'>
            
            <ListGroupItem className='ps-0 border-0'>
              <Link to='/shop'>shop</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/card'>cart</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/login'>connexion</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>politique de confidentialité</Link>
            </ListGroupItem>

          </ListGroup>
        </div>

      </Col>
        {/*--------------------------------*/}

      <Col lg="1">

      <div className='footer__quick-links'>
          <h4 className='quick__links-title'>Contact</h4>
          <ListGroup className='mb-3'>
            
            <ListGroupItem className='ps-0 border-0'>
            <span><FaMapMarkerAlt></FaMapMarkerAlt></span>
            <p>rue de .....</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
            <span><AiOutlinePhone></AiOutlinePhone></span>
            <p>+00000000000</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
            <span><BsEnvelope></BsEnvelope></span>
            <p>test@test.be</p>

            </ListGroupItem>

            

          </ListGroup>
        </div>

        
      </Col>
      <Col lg='12'>
        <p className='footer__copyright'>copyright {year}. All rights reserved.  </p>
      </Col>
     </Row>
    </Container>
  </footer>
  )
  
  
}

export default Footer
