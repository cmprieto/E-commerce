import styled, { createGlobalStyle } from "styled-components";

const desktopStartWidth = 700;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: #F0F0F0;
	}
`;

export const NavBar = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-bottom: 3px solid black;
  ${mobile} {
    width: 100%;
    flex-direction: row;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile} {
    flex-direction: column;
    align-items: center;
  }
`;
export const Btn = styled.button`
  width: 8rem;
  height: 3rem;
  justify-content: space-around;
  /*   width: 70px;
  height: 35px; */
  border-radius: 5px;
  /*  margin: 0.5em; */
  background-color: white;
  color: black;
  font-size: 0.8rem;
  border: 1px solid black;
  cursor: pointer;
  margin: 0.5rem;
  &:hover {
    background-color: #f0f0f0;
  }
  ${mobile} {
    width: 5rem;
    height: 2rem;
    margin: 0.3rem;
  }
`;

export const Container = styled.div`
  margin: 50px;
`;
