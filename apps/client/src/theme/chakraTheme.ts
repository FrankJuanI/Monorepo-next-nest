import "@fontsource/work-sans";
import "@fontsource/work-sans/600.css";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Set up theme configuration
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};
// Extend the theme to include custom configurations
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Work Sans', sans-serif`, // Apply Work Sans to headings
    body: `'Work Sans', sans-serif`, // Optionally apply Work Sans to body text
  },
});
export default theme;