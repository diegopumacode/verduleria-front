import styled from '@emotion/styled';
import React from 'react'


export default function Button({ children, className, onClick }) {
    return (
      <StyledButton className={className} onClick={onClick}>
        {children}
      </StyledButton>
    );
  }
  
  const StyledButton = styled.button`
    text-decoration: none;
    cursor: pointer;
    outline:none;
    border:none;
    width:100%;
    height:50px;
    font-weight:bold;
  `;
  