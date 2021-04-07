import React from "react";

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

const StyledCard = styled.div`
  border-bottom: 1px solid gray;
`;
