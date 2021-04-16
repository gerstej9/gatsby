import React from "react"
import "./reset.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Seo from "../components/Seo/seo"
import GlobalStyles from "../styles/GlobalStyles"
import TypographyStyles from "../styles/TypographyStyles"
import Logo from "../images/01-070215_MindIlluminated_Carroll.2e16d0ba.fill-735x490.jpg"
import styled from "styled-components"

const Spacer = styled.div`
  height:90vh;
  overflow: scroll;
`

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Logo} />
      <div className="layout">{children}</div>
      <Spacer>

      </Spacer>
      <Footer Logo={Logo} />
    </>
  )
}

export default Layout
