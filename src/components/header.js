import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import Button from "./styled/Button"



const Header = () => {
    return(
      <HeaderNav>
        <HeaderBrand>iMemeDB</HeaderBrand>
          <NavMenu>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/about">SUBSCRIBE</NavLink>
            <NavLink to="/developers">API</NavLink>
            <Button round >Post a meme</Button>
          </NavMenu>
      </HeaderNav>
    )
  }

const HeaderNav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem calc((100vw - 1300px) / 2 );
  position: relative;
  z-index:100;
  background: transparent;
`
const HeaderBrand = styled.h2`
  font-size: 1.5rem;
  line-height: 1;
  color:white;
`

const NavMenu = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px){
    display: none;
  }
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 16px;
  text-decoration: none;
  color: white;

`

export default Header
