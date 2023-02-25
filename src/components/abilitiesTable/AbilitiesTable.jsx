import { Container, HexagonImage, HexagonImageDiv } from './styles';

function SkillsTable() {
  const item = () => {
    return {
      hidden: { x: 0, y: 0, opacity: 0 },
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
      transition={{ delayChildren: 0.5, staggerChildren: 0.3 }}
      whileInView="visible"
      viewport={{ once: true }}
    >
      <HexagonImageDiv variants={item()}>
        <h1>React</h1>
        <HexagonImage src="/react-logo.png" fill alt="React_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()}>
        <h1>Angular</h1>
        <HexagonImage src="/angular-logo.png" fill alt="Angular_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()}>
        <h1>Next</h1>
        <HexagonImage src="/next-logo.png" fill alt="Next_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()} className="fill">
        <h1>Javascript</h1>
        <HexagonImage src="/javascript-logo.png" fill alt="Javascript_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()}>
        <h1>Typescript</h1>
        <HexagonImage src="/typescript-logo.png" fill alt="Typescript_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()}>
        <h1>HTML</h1>
        <HexagonImage src="/html5-logo.png" fill alt="html_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()}>
        <h1>CSS</h1>
        <HexagonImage src="/css-logo.png" fill alt="CSS_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()}>
        <h1>.NET Core</h1>
        <HexagonImage src="/dot-net-logo.png" fill alt="NetCore_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()}>
        <h1>MySQL</h1>
        <HexagonImage src="/msql-logo.png" fill alt="MySQL_Logo" />
      </HexagonImageDiv>
      <HexagonImageDiv variants={item()} className="fill">
        <h1>PostgreSQL</h1>
        <HexagonImage src="/psql-logo.svg" fill alt="PostgreSQL_Logo" />
      </HexagonImageDiv>
    </Container>
  );
}

export default SkillsTable;
