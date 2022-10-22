import React, {Component} from 'react';
import { Carousel} from 'react-bootstrap';
import "./Home.css"
import truck1 from '../../img/1626180101620.jpg'
import truck2 from '../../img/iveco-s-way-que-se-fabrica-en-la-planta-de-madrid.jpg'
import truck3 from '../../img/volvo-truck-electrico.jpg'
import truck2featurette from '../../img/Iveco_S-Way.jpg'
import truck3featurette from '../../img/volvo-trucks-volvo-fh-long-haul.avif'
import bus1featurette from '../../img/multimedia.miniatura.a4bd2853bc4a5423.3138363078313035302d6275732d646f626c652d686f6d652d746561736572325f6d696e6961747572612e6a7067.jpg'

function Home() {

  return (
    <div>

<Carousel className="carousel">
  <Carousel.Item >
    <img
      className="d-flex justify-content-center"
      src={truck1} rounded
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-flex justify-content-center"
      src={truck2} rounded
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-flex justify-content-right"
      src={truck3} rounded
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat.</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
              <div class="container marketing">

                      <div class="row">
                        <div class="col-lg-4">
                          <img class="rounded-circle" src={truck1} alt="Generic placeholder image" width="140" height="140"/>
                          <h2>Heading</h2>
                          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                          <img class="rounded-circle" src={truck2featurette} alt="Generic placeholder image" width="140" height="140"/>
                          <h2>Heading</h2>
                          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                          <img class="rounded-circle" src={truck3featurette} alt="Generic placeholder image" width="140" height="140"/>
                          <h2>Heading</h2>
                          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                      </div>



                      <hr class="featurette-divider"/>

                      <div class="row featurette">
                        <div class="col-md-7">
                          <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
                          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div class="col-md-5">
                          <img class="featurette-image img-fluid mx-auto" src={truck2featurette} alt="Generic placeholder image"/>
                        </div>
                      </div>

                      <hr class="featurette-divider"/>

                      <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
                          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div class="col-md-5 order-md-1">
                          <img class="featurette-image img-fluid mx-auto" src={truck3featurette} alt="Generic placeholder image"/>
                        </div>
                      </div>

                      <hr class="featurette-divider"/>

                      <div class="row featurette">
                        <div class="col-md-7">
                          <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div class="col-md-5">
                          <img class="featurette-image img-fluid mx-auto" src={bus1featurette} alt="Generic placeholder image"/>
                        </div>
                      </div>

                      <hr class="featurette-divider"/>


              </div>

              <div></div>

</div>

);

}


export default Home;