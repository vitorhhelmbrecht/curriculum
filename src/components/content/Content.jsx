import React from 'react';
import { Container, Section } from './styles';

function Content() {
  return (
    <Container>
      <Section>
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
      </Section>
      <Section>
        <h1>Experience</h1>
      </Section>
      <Section>
        <h1>Graduation</h1>
      </Section>
      <Section>
        <h1>Hobbies & Interests</h1>
      </Section>
      <Section>
        <h1>Abilities</h1>
      </Section>
    </Container>
  );
}

export default Content;
