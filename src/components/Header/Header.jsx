import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../Context/MyContext";
import Switch from "../Switch/Switch";

function Header() {
  const context = useContext(MyContext);
  return (
    <HeaderContainer backgroundColor={context.next ? "#77b5f3" : "pink"}>
      <Switch value={context.next} onChange={context.handChange} />
    </HeaderContainer>
  );
}
export default Header;
const HeaderContainer = styled.header`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
