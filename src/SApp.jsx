import styled from 'styled-components';
import background from './background.jpg';

const SApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

  background: url(${background});
  background-position: cover;
  height: 100vh;
  width: 100vw;
  color: white;
  font-family: 'Varela Round', sans-serif;

  h1,
  h2,
  h3,
  form,
  p {
    padding: 1rem;
    text-align: justify;
    line-height: 1.5rem;
  }

  form {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 15rem;
    margin: auto;
    border: 2px dotted yellowgreen;
    @media screen and (max-width: 1250px) {
      width: 100%;
    }

    label {
      width: 100%;

      @media screen and (max-width: 1250px) {
        width: 45%;
      }
    }
    input {
      width: 100%;
    }

    label {
      display: flex;
      flex-flow: column nowrap;
      position: relative;
      height: 2rem;

      &:focus-within span {
        font-size: 0.8rem;
        top: -1rem;
      }

      span {
        position: absolute;
        top: -0.1rem;
        color: #ff7a00;
        transition: 0.1s linear all;
      }

      input {
        position: absolute;
        top: 0;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #ff7a00;
        caret-color: #ff7a00;
        color: #ff7a00;
        outline: none;
      }
    }
    input[type='submit'] {
      background-color: #ff7a00;
      border: none;
      border-radius: 3px;
      color: #1e004f;
      font-weight: bold;
      padding: 0.5rem;
    }
  }
`;

export default SApp;
