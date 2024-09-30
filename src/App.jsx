import { Route, Routes } from "react-router"
import Header from "./components/Header"
import CountDown from "./features/Countdown"
import Todo from "./features/todo"
import './App.css'
import Context from "./features/Context"
import { ThemeProvider } from "./features/Context/ThemeContext"
function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/countdown" element={<CountDown />}></Route>
          <Route path="/context" element={<Context />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}


export default App
