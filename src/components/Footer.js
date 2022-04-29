import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  return (
    <Wrapper>
     
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin: 12rem auto 4rem auto;
  border-top: 1px solid black;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
 
  @media (min-width: 776px) {
    margin: 12rem auto 4rem auto;
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: var(--spacing);
  
  }
 
`;

export default Footer
