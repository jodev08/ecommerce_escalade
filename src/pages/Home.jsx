import React from 'react'
import '../styles/home.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Services from '../components/services/Services'
import ProductList from '../components/Ui/ProductList'

import CA1 from '../assets/carousel/carousel1.jpg'
import CA2 from '../assets/carousel/carousel2.jpg'
import CA3 from '../assets/carousel/carousel3.jpg'



const Home = () => {

  const year = new Date().getFullYear()
  return <Helmet title={"Home"}>
           <section className='hero__section'>
            <Container>
              <Row>
                <Col lg='6' md='6'>
                  <div className='hero__content'>
                    <p className='hero__subtitle'>Produit tendance {year}
                    
                    </p>
                    <h2>Produit tendance</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt, dolorum dicta quo pariatur possimus, ut molestiae fuga aperiam cumque quidem maiores quasi eveniet doloribus. Illo harum sunt quos cum?</p>
                    
                    <button>
                      <Link to="/shop">SHOP</Link>
                    </button>
                    

                  </div>
                </Col>
               
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={CA1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={CA2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={CA3} class="d-block w-100" alt="..." />
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

              </Row>
            </Container>

           </section>

           <Services/>

           <section className='trending__products'>
            <Container>
              <Row>
                <Col lg='12' className='text-center'>
                  <h2 className='section__title'>
                    Produit tendance 
                  </h2>
                </Col>
                <ProductList/>
              </Row>
            </Container>
           </section>

          

        </Helmet>
        
  
}

export default Home
