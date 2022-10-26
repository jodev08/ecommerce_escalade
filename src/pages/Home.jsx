import React,  {useState, useEffect} from 'react'
import '../styles/home.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Services from '../components/services/Services'
import ProductList from '../components/Ui/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/timer_img.jpg'
import Clock from '../components/Ui/Clock'

import CA1 from '../assets/carousel/carousel1.jpg'
import CA2 from '../assets/carousel/carousel2.jpg'
import CA3 from '../assets/carousel/carousel3.jpg'





const Home = () => {


  const [trendingProducts, setTrendingProducts] = useState([]) 
  const [bestProducts, setBestProducts] = useState([]) 
  const [mobileProducts, setMobileProducts] = useState([]) 
  const [WirelessProducts, setWirelessProducts] = useState([]) 

  const year = new Date().getFullYear()

  {/*------------*/}


  
  useEffect(() =>{
    const filteredTrendingProducts = products.filter((item)  =>item.category === 'shoes'
    );

    const filteredBestProducts = products.filter((item)  =>item.category === 'accessoire'
    );

    const filteredMobileProducts = products.filter((item)  =>item.category === 'helmet'
    );

    const filteredWirelessProducts = products.filter((item)  =>item.category === 'clothes'
    );

    setTrendingProducts(filteredTrendingProducts)
    setBestProducts(filteredBestProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
  
    },[]);
  


  return <Helmet title={"Home"}>
           <section className='hero__section'>
            <Container>
              <Row>
                <Col lg='6' md='6'>
                  <div className='hero__content'>
                    <p className='hero__subtitle'>Produit tendance {year}
                    
                    </p>
                    <h2>Produit tendance</h2>
                    
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
          {/*---------*/}
           <section className='trending__products'>
            <Container>
              <Row>
                <Col lg='12' className='text-center mb-5'>
                  <h2 className='section__title'>
                    Produit tendance 
                  </h2>
                </Col>
                <ProductList data={trendingProducts}/>
              </Row>
            </Container>
           </section>
          {/*---------*/}
           <section className='best__sales'>
           <Row>
                <Col lg='12' className='text-center mb-5'>
                  <h2 className='section__title'>
                    meilleurs ventes
                  </h2>
                </Col>
                <ProductList data={bestProducts}/>
              </Row>


           </section>
          {/*---------*/}
           <section className='timer__count'>
             <Container>
              <Row>

              <Col lg='6' md='6'>
                <div className='clock__top-content'>
                  <h4 className='text-white fs-6 mb-2'>Offre limitée</h4>
                </div>

                <Clock/>

                <button className='buy__btn store__btn'>
                  <Link to="/shop">visite shop</Link>
                </button>
              </Col>

                
              <Col lg='6' md='6'>
                <img src={counterImg} alt='counter_img' className='text-end' />
              </Col>

              </Row>

             </Container>
           </section>
          {/*---------*/}

           <section className='new__arrivals'>
            <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                  <h2 className='section__title'>
                    nouvelle arrivage
                  </h2>
                </Col>
                <ProductList data={mobileProducts}/>
                
              </Row>


            </Container>
            

           </section>

             {/*---------*/}
            
             <section className='popular__category'>
            <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                  <h2 className='section__title'>
                    categorie populaire
                  </h2>
                </Col>
                <ProductList data={WirelessProducts}/>
                
              </Row>


            </Container>
            

           </section>

          

          

        </Helmet>
        
  
}

export default Home
