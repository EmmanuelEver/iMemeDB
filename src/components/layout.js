import React from "react"
import {GlobalStyles} from "./styled/GlobalStyles"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
