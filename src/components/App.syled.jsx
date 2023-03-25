import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  padding: 20px;
  color: black;

  &.active {
    color: orange;
  }
`;
