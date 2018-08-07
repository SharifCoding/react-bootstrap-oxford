import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import './News.css';

class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/christChurch.jpg" className="header-image" />
        <Grid>
          <h2>Christ Church Meadows</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
            <p>Christ Church meadow is a rare open space at the heart of Oxford, open to the public all year round.
            Though seemingly tranquil, the meadow is highly variable, with seasonal flooding and a variety of wildlife that comes and goes.
            During the Civil War it proved invaluable as a defence against the Parliamentarian forces, but visitors are nowadays more likely to encounter a rare English Longhorn cow than a soldier besieging the city.
            The meadow has long been used as a site for sport, entertainment and recreation.
            It was the location for some of the earliest balloon flights in England: in 1784 James Sadler, ‘the first English aeronaut’ rose from Christ Church meadow, landing six miles away after a half-hour flight.
            In May 1785 Sadler again ascended from the meadow, this time with the statesman William Windham as a passenger.
            The meadow is enclosed by the rivers Cherwell and Thames - the Thames is home to the college boathouses where rowing teams gather to train and compete.
            Every summer the major intercollegiate regatta takes place (better known as Summer VIIIs) as it has done since the competition’s inauguration in 1815.
            Crews from across the university descend annually on the Cherwell to compete in a four-day competition.
            The meadow has also provided a beautiful setting for a number of outdoor performances, including a dramatic a celebration of Christ Church’s history in the form of a Son et Lumiere in 1968.
            It was a star studded performance: scripted by Jan Morris (historian, author, travel writer and honorary fellow at Christ Church), and with a prologue by W.H. Auden (Anglo-American poet, undergraduate and at Christ Church), it was narrated by Sir John Gielgud (actor, Oscar winner and theatre director).
            Between the river and the Meadow Gate of the college is the large Broad Walk, installed in the time of John Fell (1625-1686), dean of Christ Church and Bishop of Oxford.
            Having survived since the seventeenth century, it was in recent years threatened when proposed as the site for a new bypass. Luckily nothing came of the plans and the walk remains a refuge from the busier city streets.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
            <Image src="assets/christChurchMeadowDucksCropped.jpg" />
            <p>The Duck was a symbol of Isis, the Egyptian goddess who was a patron of nature and magic.
            The following quote is taken from the book ‘The Burden of Isis’ which was published in 1910:
            “Thy duck, thy sister, Isis, produceth the sweet odours belonging to thee and with thee,
            Yet thy way doth not tend toward us, oh our lord!”</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default News;
