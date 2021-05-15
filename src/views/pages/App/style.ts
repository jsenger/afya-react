import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;

  font-family: 'Courier New', Arial, sans-serif;

  .header {
    h1 {
      text-align: center;
    }

    button {
      display: block;
      margin: 0 auto;
      padding: 0.5rem 1rem;

      font-size: 22px;
      color: #fff;

      background-color: purple;
      border: 1px solid purple;
      border-radius: 5px;

      cursor: pointer;

      transition: 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .content {
    display: flex;
    justify-content: center;

    section {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;

      &:not(:last-child) {
        padding-right: 1rem;
      }
    }
  }
`;
