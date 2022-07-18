import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"
import "./styles/global.css"

function App() {
  return (
    <div>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Router />  
      </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
