import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import getMPTheme from "./getMPTheme";
const main = {
  width: "100%",
  backgroundColor: "rgb(37, 150, 190)",
};
export default function MarketingPage() {
  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const MPTheme = createTheme(getMPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  return (
    <div style={main}>
      <ThemeProvider theme={defaultTheme} style={main}>
        <CssBaseline />
        {/* <AppAppBar mode={mode} />} */}
        <Hero />
        <Box sx={{ bgcolor: "background.default" }}>
          <Features />
          <Testimonials />
          <Highlights />
          <Pricing />
          <FAQ />
          <Footer />
        </Box>
      </ThemeProvider>
    </div>
  );
}
