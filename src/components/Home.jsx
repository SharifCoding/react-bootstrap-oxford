import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Oxford</h2>
          <p>*website built with React, React-Router, and React-Bootstrap</p>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/radcliffeCameraCropped.jpg" circle className="profile-pic" />
            <h3>The Radcliffe Camera</h3>
            <p>The Radcliffe Camera is a building of Oxford University, England, designed by James Gibbs in neo-classical style and built in 1737–49 to house the Radcliffe Science Library.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/magdalenCollegeCropped.jpg" circle className="profile-pic" />
            <h3>Magdalen College</h3>
            <p>Magdalen College was founded in the year 1458 and has given the world the likes of Oscar Wilde, Howard Florey, John Betjeman and even King Edward VIII.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/museumDodoCropped.jpg" circle className="profile-pic" />
            <h3>The University Museum of Natural History</h3>
            <p>A Museum displaying the University's natural history specimens including some remarkable Paleontological Collections. The museum is also the home to the last seen Dodo bird in existence.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
