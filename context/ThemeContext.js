import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  toggleCurrencyMode: () => {},
});

export default function ColorModeProvider({ children }) {
  const [mode, setMode] = React.useState("dark");
  const [currency, setCurrency] = React.useState("INR");

  const currencyMode = React.useMemo(
    () => ({
      toggleCurrencyMode: () => {
        if (currency === "INR") {
          setCurrency("USD");
        } else if (currency === "USD") {
          setCurrency("INR");
        }
      },
    }),
    [currency]
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ colorMode, currencyMode, currency }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
