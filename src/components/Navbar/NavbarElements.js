import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background:#000;
height:80px;
display:flex;
justify-content:space-between;
padding: 10px
z-index: 10;
`;
export const NavLink = styled(Link)`
  color: #fff;
  padding: 10px;
  margin-right: 24px;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;

  &.active {
    color: #03a9f4;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 44px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: #03a9f4;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 10px;
  font-size: 18px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #03a9f4;
  }
`;
