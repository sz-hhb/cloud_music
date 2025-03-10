import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"
import "normalize.css"
import "./assets/css/index.less"
import { Provider } from "react-redux"
import App from "@/App"
import store from "./store"
import theme from "./assets/theme"
import { ThemeProvider } from "styled-components"

const root = createRoot(document.getElementById("root")!)

root.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>
)
