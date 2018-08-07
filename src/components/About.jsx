import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';

import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/bridgeofSighs.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/bridgeofSighsInk.jpg" className="about-profile-pic" rounded />
            <h3>The Bridge of Sighs</h3>
            <p>The bridge is often referred to as the Bridge of Sighs because of its supposed similarity to the famous Bridge of Sighs in Venice.
            However, Hertford Bridge was never intended to be a replica of the Venetian bridge, and instead it bears a closer resemblance to the Rialto Bridge in the same city.
            The bridge links together the Old and New Quadrangles of Hertford College (to the south and the north respectively), and much of its current architecture was designed by Sir Thomas Jackson.
            It was completed in 1914, despite its construction being opposed by New College. The building on the southern side of the bridge houses the College's administrative offices, whereas the northern building is mostly student accommodation.
            The bridge is always open to members of the College, who can often be seen crossing it.</p>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default About;
