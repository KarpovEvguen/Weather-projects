import { useState } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavLink,
  Signup,
  SignupLink
} from "./Header.style"

export default function Header() {
  const [flex, setFlex] = useState("");

  return (
    <HeaderWrapper>
        <Logo src="" alt="" />
      <Nav>
        <NavLink onClick={() => setFlex("flex")}>Who we are</NavLink>
        <NavLink onClick={() => setFlex("flex")}>Contacts</NavLink>
        <NavLink onClick={() => setFlex("flex")}>Menu</NavLink>
        <NavLink onClick={() => setFlex("flex")}>Contact us</NavLink>
      </Nav>

      <Signup>
        <SignupLink href="#">Sign up</SignupLink>
      </Signup>
    </HeaderWrapper>
  );
}