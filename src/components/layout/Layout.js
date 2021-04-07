import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
