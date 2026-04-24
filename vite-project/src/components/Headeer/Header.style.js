import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background: #f5f5f5;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;


export const Signup = styled.div`
  display: flex;
  align-items: center;
`;

export const SignupLink = styled.a`
  text-decoration: none;
  background: #f4a261;
  padding: 8px 18px;
  border-radius: 10px;
  color: #000;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;