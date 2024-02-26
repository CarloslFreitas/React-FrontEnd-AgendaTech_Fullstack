import { useContext } from "react"
import { RoutesMain } from "./routes/RoutesMain"
import { StyledGlobalReset } from "./styles/globalReset"
import { StyledGlobalStyle } from "./styles/globalStyles"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from "./providers/UserContext"

function App() {

  const { loadingAll } = useContext(UserContext)

  return (
    <>
      <StyledGlobalReset />
      <StyledGlobalStyle />
      {
        loadingAll ? <div id='GlobalLoad'></div> : <RoutesMain />
      }
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
        progress={null}
        theme='dark'
      />
    </>
  )
}

export default App
