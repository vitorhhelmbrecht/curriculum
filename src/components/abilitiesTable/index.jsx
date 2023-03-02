import MainSkills from './_mainSkills';
import { SkillsGrid, HexagonImage, HexagonImageDiv } from './styles';

function SkillsTable() {
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <SkillsGrid
      initial="hidden"
      transition={{ delayChildren: 0.5, staggerChildren: 0.3 }}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {MainSkills.map(skill => {
        return (
          <HexagonImageDiv
            key={skill.label}
            transition={{ duration: 0.5 }}
            variants={item}
          >
            <span>{skill.label}</span>
            <HexagonImage src={skill.logoSrc} fill alt={skill.alt} />
          </HexagonImageDiv>
        );
      })}
    </SkillsGrid>
  );
}

export default SkillsTable;
