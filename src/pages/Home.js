import React from "react";
import {
  Image,
  Grid,
  Divider,
  Dimmer,
  Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import Campus from "../images/Campus.jpg";
import bank from "../images/bank.jpg";


const Home = () => {
  return (
    <>
          <Header size="huge">Featured Work</Header>
          <Divider hidden />
          <Grid doubling>
            <Link to="/work/uni">
              <Dimmer.Dimmable blurring>
                <Image src={Campus} size="large"/>
                <Dimmer active>
                  <h2>UK University</h2>
                  <p>Improving the student digital journey</p>
                  <h3>UX Design</h3>
                </Dimmer>
              </Dimmer.Dimmable>
            </Link>
            <Divider hidden />
            <Link to="/work/bank">
              <Dimmer.Dimmable blurring>
                <Image src={bank} size="large"/>
                <Dimmer active>
                  <h2>Retail Bank</h2>
                  <p>Creating a meaningful prize draw</p>
                  <h3>UX Research</h3>
                </Dimmer>
              </Dimmer.Dimmable>
            </Link>
            {/* <Link to="/work/telecomms"></Link> */}
          </Grid>
    </>
  );
};

export default Home;
