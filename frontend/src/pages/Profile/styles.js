import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const IncidentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;

export const Incident = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;

    &:hover {
      opacity: 0.8;
    }
  }

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;
