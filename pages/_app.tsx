import { FunctionComponent } from "react";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { createHash } from "crypto";

const StyledDiv = styled.div``;

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  createHash("sha256")
  return (
    <StyledDiv>
      <Component {...pageProps} key="a"/>
    </StyledDiv>
  );
};

App.displayName = "App";

export default App;
