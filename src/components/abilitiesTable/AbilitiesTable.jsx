import Image from 'next/image';
import { Container, Item } from './styles';

function SkillsTable() {
  const item = (initialX, initialY) => {
    return {
      hidden: { x: initialX ?? 0, y: initialY ?? 0, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: 0.5,
      },
    };
  };

  return (
    <Container
      initial="hidden"
      transition={{ staggerChildren: 0.2 }}
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Item widthSpan={3} heightSpan={2} variants={item(-2000, 0)}>
        <div>
          <h1>REACT.JS</h1>
        </div>
        <Image src="/react-logo.png" fill alt="React_Logo" />
      </Item>
      <Item heightSpan={2} variants={item(2000, -500)} className="angular">
        <div>
          <h1>ANGULAR.JS</h1>
        </div>
        <Image src="/angular-logo.png" fill alt="Angular_Logo" />
      </Item>
      <Item widthSpan={2} variants={item(-2000, 0)}>
        <div>
          <h1>NEXT.JS</h1>
        </div>
        <Image src="/next-logo.png" fill alt="Next_Logo" />
      </Item>
      <Item heightSpan={2} variants={item(2000, 100)} className="fill">
        <div>
          <h1>MYSQL</h1>
        </div>
        <Image src="/msql-logo.png" fill alt="MySQL_Logo" />
      </Item>
      <Item heightSpan={2} variants={item(0, 2000)}>
        <div>
          <h1>TYPESCRIPT</h1>
        </div>
        <Image src="/ts-logo.svg" fill alt="Typescript_Logo" />
      </Item>
      <Item widthSpan={2} heightSpan={2} variants={item(-2000, 2000)}>
        <div>
          <h1>C# .NET CORE</h1>
        </div>
        <Image src="/csharp-logo.png" fill alt="NetCore_Logo" />
      </Item>
      <Item variants={item(2000, 0)} className="fill">
        <div>
          <h1>POSTGRESQL</h1>
        </div>
        <Image src="/postgresql-logo.png" fill alt="PostgreSQL_Logo" />
      </Item>
      <Item heightSpan={3} variants={item(-2000, 2000)}>
        <div>
          <h1>HTML</h1>
        </div>
        <Image src="/html5-logo.png" fill alt="html_Logo" />
      </Item>
      <Item heightSpan={2} variants={item(2000, 0)} className="fill">
        <div>
          <h1>JAVASCRIPT</h1>
        </div>
        <Image src="/javascript-logo.png" fill alt="Javascript_Logo" />
      </Item>
      <Item heightSpan={2} widthSpan={2} variants={item(0, 2000)}>
        <div>
          <h1>CSS</h1>
        </div>
        <Image src="/css-logo.png" fill alt="CSS_Logo" />
      </Item>
    </Container>
  );
}

export default SkillsTable;
