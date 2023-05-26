import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Table, TableRow } from "./Reusable/Table";
import styled from "styled-components";
import { Pill } from "./Reusable/Pill";
import { Section, Sections } from "./Reusable/Section";
import { PageProps } from "App";
const LinkedInLink = "https://www.linkedin.com/in/zachary-a-cooper/";
const GithubLink = "https://github.com/zacoope1";
const EmailLink = "mailto:email@zachary-cooper.com";

export const Home = ({ loading, setLoading }: PageProps): JSX.Element => {
  return (
    <>
      <ContentContainer>
        <Sections>
          <Section title="Links">
            <Links />
          </Section>
          <Section title="About Me">
            <AboutMe />
          </Section>
          <Section title="Toolset">
            <Toolset />
          </Section>
          <Section title="Development Work History">
            <WorkHistory />
          </Section>
        </Sections>
      </ContentContainer>
      <footer>
        <Section>
          Website Built By Zachary Cooper © Copyright 2023, Zachary-Cooper.com.
          All Rights Reserved.
        </Section>
      </footer>
    </>
  );
};

const ContentContainer = styled.div`
  margin: 4em 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutMe = (): JSX.Element => {
  return (
    <StyledAboutMe>
      <FramedPicture>
        <img src={"./images/Zachary_Cooper.jpg"} alt="Zachary Cooper" />
      </FramedPicture>
      <AboutTextContainer>
        <p>
          Welcome to my portfolio website! I'm thrilled to have you here. My
          name is Zachary Cooper, and I am a passionate and dedicated full stack
          software developer with about three years of professional experience.
        </p>
        <p>
          Technology has always fascinated me, and I consider myself fortunate
          to have turned my passion into a fulfilling career. Over the years, I
          have honed my skills in various programming languages, frameworks, and
          tools to become a versatile and well-rounded developer.
        </p>
        <p>
          In my journey as a software developer, I have had the opportunity to
          work on a wide range of projects, from small-scale web applications to
          complex enterprise systems. I am well-versed in both front-end and
          back-end development, and I thoroughly enjoy the challenge of
          seamlessly integrating them to create efficient and user-friendly
          applications.
        </p>
        <p>
          When it comes to front-end development, I have a keen eye for detail
          and a deep understanding of user experience principles. I excel in
          HTML, CSS, and JavaScript, and I'm proficient in popular front-end
          frameworks such as React and Angular. Crafting visually appealing and
          intuitive user interfaces is always my top priority.
        </p>
        <p>
          On the back-end, I am experienced in building robust and scalable
          server-side architectures. I have worked with languages like C# and
          Java, as well as frameworks like Node.js, .Net, and Spring. I am adept
          at designing and implementing RESTful APIs, working with databases,
          and ensuring the security and performance of the applications I
          develop.
        </p>
        <p>
          What truly sets me apart is my commitment to continuous learning. In
          this rapidly evolving field, I believe it is essential to stay updated
          with the latest technologies and trends. I am always eager to explore
          new tools, frameworks, and methodologies to enhance my skills and
          deliver innovative solutions.
        </p>
        <p>
          Collaboration and communication are also key aspects of my work
          philosophy. I thrive in team environments where ideas are shared, and
          collective problem-solving leads to outstanding results. I am a
          proactive communicator, and I value clear and concise interactions to
          ensure effective collaboration with clients, stakeholders, and fellow
          developers.
        </p>
        <p>
          I take great pride in my ability to transform ideas into reality
          through elegant and efficient code. Nothing excites me more than
          taking on new challenges, solving complex problems, and delivering
          high-quality software solutions that exceed expectations.
        </p>
      </AboutTextContainer>
    </StyledAboutMe>
  );
};

const FramedPicture = styled.div`
  img {
    width: 600px;
    --s: 10px; /* control the size */
    padding: var(--s);
    border: calc(2 * var(--s)) solid #0000;
    outline: 1px solid #c5b358;
    outline-offset: calc(-1 * var(--s));
    background: conic-gradient(from 90deg at 1px 1px, #0000 25%, #c5b358 0);
  }
  /* border-top: 5px solid red;
  border-right: 5px solid green;
  border-bottom: 5px solid orange;
  border-left: 5px solid blue; */
`;

const AboutTextContainer = styled.div`
  p {
    text-shadow: 0px 0px 10px #c5b358;
  }
  margin: 0 0 0 2em;
  display: block;
  min-width: 800px;
  max-width: 1000px;
`;

const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Toolset = (): JSX.Element => {
  return (
    <Table>
      <TableRow>
        <Pill icon="Typescript" />
        <Pill icon="React" />
        <Pill icon="Angular" />
        <Pill icon="Nodejs" />
        <Pill icon="Html" />
        <Pill icon="Css" />
      </TableRow>
      <TableRow>
        <Pill icon="C#" />
        <Pill icon="Dotnet" />
        <Pill icon="Java" />
        <Pill icon="Spring" />
        <Pill icon="Python" />
      </TableRow>
      <TableRow>
        <Pill icon="Postgres" />
        <Pill icon="MsSql" />
      </TableRow>
      <TableRow>
        <Pill icon="Azure" />
        <Pill icon="Aws" />
      </TableRow>
    </Table>
  );
};

const Links = (): JSX.Element => {
  return (
    <Table>
      <TableRow>
        <Pill clickable link={LinkedInLink} icon="Linkedin" />
        <Pill clickable link={GithubLink} icon="Github" />
        <Pill clickable link={EmailLink} icon="Email" text="Email Me" />
      </TableRow>
    </Table>
  );
};

const WorkHistory = (): JSX.Element => {
  return (
    <StyledTimeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h3>Neudesic, An IBM Company - Software Developer</h3>
          <h4>May 2021 - Present</h4>
          <StyledImage src="./images/NEUDESIC-LOGO.png" alt="Neudesic Logo" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h3>Equinix - Product Engineer Intern</h3>
          <h4>May 2020 - Dec 2020</h4>
          <StyledImage src="./images/EQUINIX-LOGO.png" alt="Neudesic Logo" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h3>Student Web Developer - Arizona State University</h3>
          <h4>Feb 2020 - May 2020</h4>
          <StyledImage src="./images/ASU-FSE-LOGO.png" alt="Neudesic Logo" />
        </TimelineContent>
      </TimelineItem>
    </StyledTimeline>
  );
};

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  user-select: none;
`;

const StyledTimeline = styled(Timeline)`
  width: 100%;
`;
