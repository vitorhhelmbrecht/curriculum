import SkillsTable from '../abilitiesTable';
import ContentSection from '../contentSection';
import {
  CollapsableSpan,
  Container,
  ExperienceContainer,
  FlexBox,
  VerticalFlexBox,
} from './styles';

function Content() {
  return (
    <Container>
      <ContentSection id="Who">
        <h1>Who am I?</h1>
        <span>
          I am an experienced back-end developer that has always worked with
          .NET, but with every passing day I am falling more and more towards
          the front-end development side.
          <br />
          <br />I am currently working as a software engineer with React.js and
          .NET at AmbevTech, and even though I am enjoying a lot working with
          Next (which I am learning while doing this project), it would not
          matter for me if I worked with React, Angular, Vue or Next.
        </span>
      </ContentSection>
      <ContentSection id="Experience">
        <h1>Experience</h1>
        <ExperienceContainer>
          <VerticalFlexBox>
            <FlexBox>
              <h2>Fácil</h2>
              <h3>2018 - 2021</h3>
            </FlexBox>
            <p>
              The first company I ever worked in, starting as an intern. There I
              had the chance to interact daily with a lot of the basic skills I
              use until this date, like .NET Core, SQL, Javscript, HTML and CSS.
            </p>
            <ul>
              <li>
                As an intern I proposed and made a program that automated the
                process of creating and deployng new releases which saved at
                least 4 hours of manual work for another intern each week, and
                afterwards was used to automate even more deployment processes.
              </li>
              <li>
                As a junior developer I got the chance to take care of the
                programming part of a big project involving 2 multinational
                companies. We were able to finish the project that was estimated
                at 6 and a half months in only 4 months of work. After praises
                from both the companies I got recognized and was promoted to
                mid-level developer.
              </li>
            </ul>
          </VerticalFlexBox>
          <VerticalFlexBox>
            <FlexBox>
              <h2>AmbevTech</h2>
              <h3>2021 - Now</h3>
            </FlexBox>
            <p>
              I mainly accepted the challenge to work at AmbevTech so I could
              learn more, in every single aspect. I was able to improve a lot
              the skills I already had and I got access to a lot of technologies
              that I now use on a day to day basis, like Scrum, Docker, Azure,
              Angular, React, some aspects of DevOps and so on.
            </p>
            <ul>
              <li>
                The first team I got the chance to work at AmbevTech had a
                deadline of around 2 months to deliver a complete project with 3
                main pages and we nailed it.
              </li>
              <li>
                After changing the team I was in, I started working mainly as a
                frontend developer with React and every passing day I am
                improving the code and performance of the system, getting
                recognized by the whole team.
              </li>
            </ul>
          </VerticalFlexBox>
        </ExperienceContainer>
      </ContentSection>
      <ContentSection id="Graduation">
        <h1>Graduation</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </ContentSection>
      <ContentSection id="Skills">
        <h1>Skills</h1>
        <SkillsTable />
      </ContentSection>
      <ContentSection id="Hobbies">
        <h1>Hobbies & Interests</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </ContentSection>
    </Container>
  );
}

export default Content;
