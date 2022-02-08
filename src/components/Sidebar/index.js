import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarBtn,
  SidebarLink,
  SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='/services' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='/contact-us' onClick={toggle}>
            Contact Us
          </SidebarLink>
          <SidebarLink to='/sign-up' onClick={toggle}>
            Signup
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtn onClick={toggle}>Sign in</SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
