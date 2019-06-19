import React from "react";
import { Route } from "react-router-dom";
import { HeaderContainer, HeaderImage } from "../common/headerStyles";

function Header() {
  return <Route exact path="/" /> ? (
    <HeaderContainer>
      <HeaderImage src="/images/header.jpg" alt="kitchen" />
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <HeaderImage src="/images/headertodos.jpg" alt="work desk" />
    </HeaderContainer>
  );

  // if (
  //   (
  //     <BrowserRouter>
  //       <Route exact path="/" />
  //     </BrowserRouter>
  //   )
  // ) {
  //   return (
  //     <HeaderContainer>
  //       <HeaderImage src="/images/header.jpg" alt="kitchen" />
  //     </HeaderContainer>
  //   );
  // } else {
  //   return (
  //     <HeaderContainer>
  //       <HeaderImage src="/images/headertodos.jpg" alt="work desk" />
  //     </HeaderContainer>
  //   );
  // }
}

export default Header;
