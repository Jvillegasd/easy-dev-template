import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import TimepickerStyles from "@/shared/components/form/date-pickers/timepickerStyles";
import Router from "./Router";
import store from "./store";
import ScrollToTop from "./ScrollToTop";
import { config as i18nextConfig } from "../../translations";
import GlobalStyles from "./globalStyles";
import RechartStyles from "./rechartStyles";
import NotificationStyles from "./notificationStyles";
import CalendarStyles from "./calendarStyles";

i18n.init(i18nextConfig);

const ThemeComponent = ({ children }) => {
  const { mode, direction, shadow, border } = useSelector((state) => ({
    mode: state.theme.className,
    direction: state.rtl.direction,
    shadow: state.shadow.className,
    border: state.border.className,
  }));

  const theme = createTheme({
    palette: {
      type: mode,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider
        theme={{
          mode,
          direction,
          shadow,
          border,
        }}
      >
        <GlobalStyles />
        <NotificationStyles />
        <RechartStyles />
        <TimepickerStyles />
        <CalendarStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

ThemeComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const ConnectedThemeComponent = ThemeComponent;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/dashboard">
        <I18nextProvider i18n={i18n}>
            <ConnectedThemeComponent>
              <ScrollToTop>
                <Router />
              </ScrollToTop>
            </ConnectedThemeComponent>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
