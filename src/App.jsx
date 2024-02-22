import { RoutesMain } from "./routes/RoutesMain"
import { StyledGlobalReset } from "./styles/globalReset"
import { StyledGlobalStyle } from "./styles/globalStyles"

function App() {

  return (
    <div className="App">
      <StyledGlobalReset />
      <StyledGlobalStyle />
      <RoutesMain />
    </div>
  )
}

export default App
