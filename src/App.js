import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Grid,
  Divider,
  List,
  Image,
  Container,
  Header,
  Responsive,
} from "semantic-ui-react";

import Home from "./pages/Home";
import University from "./pages/University";
import Bank from "./pages/Bank";
import Telecomms from "./pages/Telecomms";

import avatar from "./images/avatar.jpg";

import CV from "./docs/StephenSJBrown CV.pdf";

function App() {
  return (
    <>
      <Router>
        <Grid>
          <Grid.Column computer={1} tablet={1} mobile={1} id="left-margin" />
          <Grid.Column computer={14} tablet={14} mobile={14} id="page">
            <Responsive as="Divider" minWidth={320} />
            <Divider hidden />
            <Divider hidden />
            <Grid id="page-grid">
              <Grid.Column mobile={16} tablet={8} computer={4} id="info">
                <Container textAlign="center">
                  <Header as="h1">Stephen</Header>
                  <Image
                    circular
                    src={avatar}
                    size="small"
                    centered
                    alt="profile photo"
                  />
                  <Divider hidden />
                  <p>
                    I'm a UX Designer from Accenture that recently gained
                    experience in full-stack web development during a sabbatical
                    travelling Asia. Outside of tech, I like to make electronic
                    and neo-soul music, and watch Kurzgesagt videos.
                  </p>
                </Container>
                <Divider hidden />
                <List>
                  <List.Item>
                    <List.Icon name="users" />
                    <List.Content>Accenture Interactive</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="user" />
                    <List.Content>Digital Designer and Developer</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>London, UK</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                      <a href="mailto:stephen.sjbrown@gmail.com">
                        stephen.sjbrown@gmail.com
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="linkedin" />
                    <List.Content>
                      <a href="https://www.linkedin.com/in/stephensjbrown/">
                        LinkedIn
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="github" />
                    <List.Content>
                      <a href="https://github.com/StephenSJBrown/">Github</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="id badge" />
                    <List.Content>
                      <a href={CV}>CV</a>
                    </List.Content>
                  </List.Item>
                </List>
                <Divider />
                <Container textAlign="center">
                  <p>
                    This website was coded by me in React, using the Semantic UI
                    library (which has a few alignment issues but great for
                    getting things moving).
                  </p>
                </Container>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={12} id="work-panel">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/work/uni">
                    <University />
                  </Route>
                  <Route path="/work/bank">
                    <Bank />
                  </Route>
                  <Route path="/work/telecomms">
                    <Telecomms />
                  </Route>
                </Switch>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column computer={1} tablet={1} mobile={1} id="right-margin" />
        </Grid>
      </Router>
    </>
  );
}

export default App;
