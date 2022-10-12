import React, {Component} from 'react';
import { Carousel} from 'react-bootstrap';
import "./Home.css"

function Home() {



  return (
    <div>

<Carousel className="carousel">
  <Carousel.Item >
    <img
      className="d-block w-100"
      //src={pilar1} rounded
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      //src={pilar2} rounded
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      //src={pilar3} rounded
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div></div>

    </div>
    
  );

  }


export default Home;