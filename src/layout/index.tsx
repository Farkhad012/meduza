import React from "react";

import { Header, Main, Footer } from "../components";

import './styles.scss';

const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  )
}

export { Layout };