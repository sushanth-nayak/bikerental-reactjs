import React from "react";
import "../../styles/become-rider.css";
import { Container, Row, Col } from "reactstrap";

import riderImg from "../../assets/all-images/zx-10r.png";

const BecomeRiderSection = () => {
  return (
    <section className="become__rider">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__rider-img">
            <img src={riderImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__rider-title">
            Discover the Joy of Riding: Your Perfect Bike Awaits
            </h2>

            <button className="btn become__rider-btn mt-4">
             Explore
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeRiderSection;
