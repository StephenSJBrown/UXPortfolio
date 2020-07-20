import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Message,
  Container,
  Dimmer,
  Image,
  Header,
  Statistic,
} from "semantic-ui-react";

import bank from "../images/bank-banner.png";
import Usability from "../images/Usability-banner.png";
import Compete from "../images/compete-banner.png";
import Interview from "../images/interview-banner.png";
import SurveyBanner from "../images/survey-banner.png";
import Survey from "../images/survey.png";
import lab1 from "../images/lab1.png";
import lab2 from "../images/lab2.png";
import lab3 from "../images/lab3.png";

const Bank = () => {
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
          <Image src={bank} />
          <Dimmer active>
            <Header size="large" inverted>
              Retail Bank
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container text id="about">
        <h2>About the Project</h2>
        <p>
          This large UK bank had a loyalty programme which involved a monetary
          prize draw for savings accounts, and a separate draw for mortgage
          holders. Their target audience was their "Group 1" demographic, the
          top 5 highest spending marketing groups.
        </p>
        <h2>Problem</h2>
        <p>
          The prize draw wasn't attracting as many existing customers as hoped
          and was being relaunched.
          <br />
          <br />
          Additionally, during the 10 week project, the bank wanted to use the
          prize draw to make some account acquisitions. There were also strict
          regulatory rules on the prize draw design to prevent account holders
          gambling.
        </p>
        <h2>My Role</h2>
        <p>As a UX researcher, my responsibilities were:</p>
        <ul>
          <li>Desk-based research to draw inspiration from existing draws</li>
          <li>Qualitative interviews</li>
          <li>A quantitative survey</li>
          <li>Lab based customer research sessions.</li>
        </ul>
      </Container>
      <Divider hidden />
      <Container textAlign="center" id="analysis-header">
        <Dimmer.Dimmable blurring>
          <Image src={Compete} fluid />
          <Dimmer active>
            <Header size="medium" inverted>
              Desk Research
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container text id="analysis-body">
        <em>
          In order to find out what makes a good prize draw, I looked to
          existing draws both within Financial Services and outside for
          inspiration.
        </em>
        <br />
        <br />
        <p>
          Some of the key ideas I found were:
          <br />
          <br />
          <b>Gamification:</b> A higher bank balance could result in more
          chances to win the prize draw
          <br />
          <br />
          <b>Partnerships:</b> Gifts given by other brands and organisation to
          add additional benefit e.g. Nike
          <br />
          <br />
          <b>Non-Winner Communication:</b> Many people would lose the prize
          draw, but to keep them engaged, the messaging had to be positive, and
          direct them towards their next chance of winning.
        </p>
      </Container>
      <Divider hidden />
      <Container textAlign="center" id="interview-header">
        <Dimmer.Dimmable blurring>
          <Image src={Interview} fluid />
          <Dimmer active>
            <Header size="medium" inverted>
              Street Interviews
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container id="interview-body">
        <Container text>
          <em>
            In order to get a quick understanding of awareness and feelings
            toward the prize draw, I went into local branches of the bank around
            lunch to speak to their customers. Additionally the location lent
            itself to having a high chance of Group 1 working in that area.
          </em>
          <ul>
            <li>
              I asked demographic questions to find out if they were in our
              target group, if they had heard of the prize draw and factors
              influencing their entrance into the draw
            </li>
            <li>
              Due to short project timelines, this method of research was used
              to get quick results to guide later design decisions. Lunch time
              was chosen as more customers were likely to visit during that time
            </li>
            <li>
              I interviewed <b>54</b> people over two locations, <b>74%</b> of
              which were in the target group
            </li>
            <li>
              I was most interested in whether people preferred a higher chance
              of winning or to win big, and what they preferred winning, as
              these would be some of the driving forces for signing up to the
              prize draw and it's appeal
            </li>
            <li>
              Overwhelmingly, people preferred to win money over any physical
              prize and they preferred a greater chance to win as they felt they
              didn't win anything
            </li>
          </ul>
        </Container>
      </Container>
      <Divider hidden />
      <Container id="survey-header">
        <Dimmer.Dimmable blurring>
          <Image src={SurveyBanner} />
          <Dimmer active>
            <Header size="medium" inverted>
              Surveys
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container text id="survey-body">
        <em>
          In addition to the street interviews, I wanted to get some quick
          quantitative feedback on what would be the highest converting deal for
          account holders. This would be difficult to get quickly on the street,
          so I sent a survey to the next best people, branch colleagues. They
          knew the customer well, and their answers would be biased towards the
          bank, I had a method around that.
        </em>
        <Divider hidden />
        <ul>
          <li>
            I sent out a quantitive survey with answers to questions being
            ranked from 1 - 5 in terms of likelihood, to be tallied up
          </li>
          <li>
            Options were intentionally framed against a very attractive offer to
            account holders (switch their account for £500) which was not
            economically feasible for the bank
          </li>
          <li>
            This allowed us to compare their answers against this framed answer
            to find a potential candidate
          </li>
          <li>
            I found colleagues felt customers were highly likely to take up
            Internet Banking to be eligible for one of the prize draws, compared
            to switching their current account
          </li>
          <li>
            Ultimately, after further testing, this lead to Internet Banking
            being a requirement for customers to be eligible for the prize draw
          </li>
        </ul>
        <Divider hidden />
        <Image src={Survey} size="large" centered />
      </Container>
      <Divider hidden />
      <Container textAlign="center" id="lab-header">
        <Dimmer.Dimmable blurring>
          <Image src={Usability} fluid />
          <Dimmer active>
            <Header size="medium" inverted>
              Lab Interviews
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </Container>
      <Divider hidden />
      <Container text id="lab-body">
        <em>
          The finale of my research came down to hour long lab interviews over
          two weeks.
        </em>
        <ul>
          <li>
            Participants were screened to be within our target group. As this
            group was split into 5 different demographic segments, I recruited
            up to 5 of each segment, leading to a total of 24 participants
          </li>
          <li>
            During the lab interview, participants were asked priming questions
            about their experience with prize draws, and separately their
            banking activity
          </li>
          <li>
            Further, they were asked about their feelings toward opening a
            current account to be eligible for the prize draw, testing a digital
            prototype with them, plus how engaged we could keep them if they
            lost
          </li>
          <li>
            I found that most participants were happy to open a current account
            to be eligible for the draw, as having their mortgage and current
            account with the same bank "made sense"
          </li>
          <Divider hidden />
          <Image.Group size="medium" centered>
            <Image src={lab1} />
            <Image src={lab3} />
            <Image src={lab2} />
          </Image.Group>
          <Divider hidden />
          <li>
            In the digital prototype, participants were confused about the
            naming of a section, and most participants thought the prize draw
            would be found in a different place than where the team had put it.
            This information was fed back to the team for a re-iteration
          </li>
          <li>
            Surprisingly, I found that since participants did not expect to win
            the prize draw, they felt they would not feel bitter about being
            told they hadn't won the draw after each draw, for timelines
            reaching over a year
          </li>
          <li>
            This led to a redesign of the prototype, and opening a current
            account with the bank being a requirement of one of the draws
          </li>
          <li>
            There were also some differences between the average answer of each
            group, but as the sample size was low per group, I could not use
            them to provide statistically significant answers
          </li>
        </ul>
      </Container>
      <Divider hidden />
      <Divider hidden />
      <Statistic.Group widths="3" id="stats">
        <Statistic>
          <Statistic.Value>54</Statistic.Value>
          <Statistic.Label>Street Interviews</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>114</Statistic.Value>
          <Statistic.Label>surveys</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>24</Statistic.Value>
          <Statistic.Label>Lab Interviews</Statistic.Label>
        </Statistic>
      </Statistic.Group>
      <Divider hidden />
      <Container text id="learnings">
        <h1>Key Learnings</h1>
        <p>
          There's a lot of value in getting real opinions from users as soon as
          possible, even if it means going out on the street.
          <br />
          <br />
          One thing I worried about was asking questions which would receive
          fruitless answers, so while designing my questions I ensured I thought
          one step ahead to get to the meat of an answer (this involved a lot of
          follow-up "Why" questions!){" "}
        </p>
      </Container>
      <Divider hidden />
      <Link to="/">
        <Button color="teal">Back to Work</Button>
      </Link>
    </>
  );
};

export default Bank;
