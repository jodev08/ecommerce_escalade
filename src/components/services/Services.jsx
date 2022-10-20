import '../services/services.css'
import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {FaTruck} from 'react-icons/fa'


const Services = () => {
  return <section className='services'>
    <Container>
        <Row>
            <Col lg='3' md='4'>
                <div className='services__item'>
                    <span>
                       <FaTruck></FaTruck>
                    </span>
                    <div>
                        <h3>livraison gratuit</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur temporibus quidem aliquam rerum suscipit at, veritatis asperiores dolores maiores dolorum repellat! Voluptatem sed, deleniti animi assumenda eos mollitia vero nam!</p>
                    </div>

                </div>
            </Col>

            <Col lg='3' md='4'>
                <div className='services__item'>
                    <span>
                       <FaTruck></FaTruck>
                    </span>
                    <div>
                        <h3>payement sécurisé</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur temporibus quidem aliquam rerum suscipit at, veritatis asperiores dolores maiores dolorum repellat! Voluptatem sed, deleniti animi assumenda eos mollitia vero nam!</p>
                    </div>

                </div>
            </Col>
            <Col lg='3' md='4'>
                <div className='services__item'>
                    <span>
                       <FaTruck></FaTruck>
                    </span>
                    <div>
                        <h3>retour garantiee</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur temporibus quidem aliquam rerum suscipit at, veritatis asperiores dolores maiores dolorum repellat! Voluptatem sed, deleniti animi assumenda eos mollitia vero nam!</p>
                    </div>

                </div>
            </Col>
            <Col lg='3' md='4'>
                <div className='services__item'>
                    <span>
                       <FaTruck></FaTruck>
                    </span>
                    <div>
                        <h3>satisfait ou rembourser </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur temporibus quidem aliquam rerum suscipit at, veritatis asperiores dolores maiores dolorum repellat! Voluptatem sed, deleniti animi assumenda eos mollitia vero nam!</p>
                    </div>

                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Services
