import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  h2 {
    font-size: clamp(2rem, 2vw, 5rem);
  }

  ul {
    margin-left: 2rem;

    li {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export const CollapsableSpan = styled.span`
  display: none;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: baseline;
  gap: 1rem;
`;

export const VerticalFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
