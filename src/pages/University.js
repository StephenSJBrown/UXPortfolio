import React from "react";
import { Link } from "react-router-dom";
import {
  Message,
  Image,
  Statistic,
  Container,
  Dimmer,
  Divider,
  Button,
  Header,
  Sticky,
  Responsive,
} from "semantic-ui-react";

import Campus from "../images/Campus-banner.png";
import Workshop from "../images/Workshop-banner.png";
import Wireframe from "../images/Wireframe.png";
import WireframeBanner from "../images/Wireframe-banner.png";
import UsabilityBanner from "../images/Usability-banner.png";

const University = () => {
  return (
    <>
      <Link to="/">
        <Button color="teal">Back to Work</Button>
      </Link>
      <Message info>
        <p>
          This project was carried out under private contract, so the client
          remains anonymous, and materials have been altered or ommitted to not
          breach contract.
        </p>
      </Message>
      <Container textAlign="center" id="header">
        <Dimmer.Dimmable blurring>
          <Image src={Campus} />
          <Dimmer active>
            <Header size="huge" inverted>
              UK University
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container text id="about">
        <h2>About the Project</h2>
        <p>
          Students interact with this university from Application through to
          Graduation and many touch points in between. The aim of this project
          was to assess the entire existing student journey and improve it for
          both students and staff.
        </p>
        <h2>My Role</h2>
        <p>Stepping into my first UX Designer position, my role was:</p>
        <ul>
          <li>Workshop Facilitation</li>
          <li>Wireframing</li>
          <li>Usability testing</li>
        </ul>
        <p>
          I joined the project during the <b>design phase</b> where experience
          maps, user stories, and personas had been created.
        </p>
      </Container>
      <Divider hidden />
      <Container textAlign="center" id="workshop-header">
        <Dimmer.Dimmable blurring>
          <Image src={Workshop} fluid />
          <Dimmer active>
            <Header size="medium" inverted>
              Workshop Facilitation
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container text id="workshop-body">
        <em>
          During the project I organised a number of workshops to involve client
          stakeholders from the company of the design process.
        </em>
        <ul>
          <li>
            These workshops were important to gain key information about the
            processes to be designed, and align on design decisions from
            different departments
          </li>
          <li>
            University department heads, the product owner, tech architects,
            experts, and relevant staff were involved
          </li>
          <li>
            I facilitated the workshops, with additional organisational help and
            scribing from team members
          </li>
          <li>
            Workshops were prepared using existing materials of the current
            process provided by the client and were no longer than three hours
          </li>
          <li>
            Key exercises were <b>Journey Mapping</b> and <b>Card Sorting </b>
            (closed) to group existing processes
          </li>
          <li>
            During these workshops we were able to decide where activities
            should be grouped. For example, grouping questions into segments in
            student questionnaires, additionally I discovered a number of
            questions which were unecessary, thus simplifying the user journey.
          </li>
        </ul>
      </Container>
      <Divider hidden />
      <Container textAlign="center" id="wireframe-header">
        <Dimmer.Dimmable blurring>
          <Image src={WireframeBanner} fluid />
          <Dimmer active>
            <Header size="medium" inverted>
              Wireframes
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container id="wireframe-body">
        <Container text>
          <em>
            During the design process I created wireframes for usability
            testing.
          </em>
          <ul>
            <li>
              These wireframes were medium fidelity in order to give visual
              support without using uneccesary time. The final visual identity
              was to be decided at a later stage
            </li>
            <li>
              They were designed on AxureRP as this was the project's tool of
              choice
            </li>
            <li>
              This particular design, showing the student portal homepage went
              through three iterations
            </li>
          </ul>
        </Container>
        <Container textAlign="center">
          <Image src={Wireframe} size="large" bordered centered />
          <Divider hidden />
          <p>Wireframe for university portal's homepage (altered)</p>
        </Container>
      </Container>
      <Divider hidden />
      <Container textAlign="center" id="usability-header">
        <Dimmer.Dimmable blurring>
          <Image src={UsabilityBanner} fluid />
          <Dimmer active>
            <Header size="medium" inverted>
              Usability Testing
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container text id="usability-body">
        <em>
          Every other week I had the opportunity to test our wireframes with
          university students
        </em>
        <ul>
          <li>
            With each test I aimed to find out how well users were able to
            complete the task of a given scenario, as well as clarifying any
            design concerns we had identified during workshops
          </li>
          <li>
            Our test users were students in the year appropriate for the problem
            I was solving. e.g. First year students for first year
            accommodation, final years of graduation
          </li>
          <li>
            These were moderated sessions in person, with an additional note
            taker
          </li>
          <li>
            One example of an insight that came about was many students expected
            a dropdown when searching for halls of residence as many prospective
            students would not know the names of all halls
          </li>
          <li>
            Armed with this information, I redesigned the page to display each
            hall with both the name and picture in order to select a hall more
            easily and become better acquainted with halls
          </li>
        </ul>
      </Container>
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Statistic.Group widths="3">
          <Statistic>
            <Statistic.Value>36</Statistic.Value>
            <Statistic.Label>Workshops</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>32</Statistic.Value>
            <Statistic.Label>tests</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>3</Statistic.Value>
            <Statistic.Label>average wireframe iterations</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Container>
      <Divider hidden />
      <Divider hidden />
      <Container text id="learnings">
        <h1>Key Learnings</h1>
        <h4>Keeping Workshops on track</h4>
        <p>
          During the workshops with such large groups, topics could easily drift
          from our goals, however it was hard to discern where the line was. In
          moments like this I would carefully listen to the conversation, and
          guide it back to the immediate goals, or put topics in a parking lot
          for later discussion.
        </p>
        <h4>Don't assume</h4>
        <p>
          Although I had been a university student, I had to resist the
          temptation of speaking on the user's behalf without a researched
          opinion. IN noticing these thoughts, I would add it to a set of
          questions to ask users.
        </p>
        <h4>Don't overdesign</h4>
        <p>
          Low-medium fidelity quireframes aren't all too pretty. Sometimes it
          felt it would help to improve their fidelity, but this time would be
          wasted and may potnetially distract from the purposes of testing, so I
          didn't!
        </p>
      </Container>
      <Divider hidden />
      <Link to="/">
        <Button color="teal">Back to Work</Button>
      </Link>
    </>
  );
};

export default University;
