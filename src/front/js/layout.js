import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ThemeSwitcher } from "./component/ThemeSwitcher";
import { FormQuote } from "./pages/formQuote";
import ContactForm from "./pages/formContact";
import AboutUs from "./pages/aboutUs";
import { TruckCargo } from "./pages/truckCargo";
import { OceanCargo } from "./pages/oceanCargo";
import { AirCargo } from "./pages/airCargo";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

  return <>
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Demo />} path="/demo" />
          <Route element={<FormQuote />} path="/quote" />
          <Route element={<TruckCargo />} path="/ground-cargo" />
          <Route element={<OceanCargo />} path="/ocean-cargo" />
          <Route element={<AirCargo />} path="/air-cargo" />
          <Route element={<ContactForm />} path="/contact" />
          <Route element={<AboutUs />} path="/about" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<h1>Not found!</h1>} path="*" />
        </Routes>
        {/*<ThemeSwitcher />*/}
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  </>;
};

export default injectContext(Layout);
