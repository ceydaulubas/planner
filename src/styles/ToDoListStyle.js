import styled from 'styled-components';

export const BackgroundBox = styled.div`
  background-color: rgb(230, 230, 250);
  height: 70vh;
  width: 70%;
  margin: 5rem auto;
  border-radius: 20px;
  border: 1px solid #9370db;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h4`
  margin: 2rem;
  text-align: center;
`;

export const FormBox = styled.div`
  text-align: center;
  width: 50%;
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormAddButton = styled.button`
  background-color: #9370db;
  padding: 0.5em 3em;
  border: 1px solid #8b008b;
  margin: 1em;
  /* box-sizing: border-box; */
  text-transform: uppercase;
  text-align: center;
  /* transition: all 0.15s; */
  border-radius: 10px;
`;
