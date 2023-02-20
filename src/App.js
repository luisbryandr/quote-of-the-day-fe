/***  Import React Tools Here***/
import { useState } from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

/*** Import Components Here ***/
import Form from './components/Form'

/*** Import Styles heres ***/
import styled from "styled-components"
import Button from "@mui/material/Button"
import "./App.css"

/*** Import Data Here***/
import quotes from "./assets/dummyData"

function App() {
  const [entry, setEntry] = useState(
    "The quote of the day is: Click the button to find out, happy learning"
  )

  console.log(entry)

  const generateQuote = () => {
    const newQuote = Math.floor(Math.random() * quotes.length)
    console.log(newQuote)

    setEntry(`"${quotes[newQuote].quote}" -${quotes[newQuote].author} `)
  }
  return (
    <div>
      <MainDiv className="App">
        <Header>
          <p className="entryone">{entry}</p>
          <Button variant="contained" onClick={generateQuote}>
            Generate Quote
          </Button>
        </Header>
        <Form />
      </MainDiv>
    </div>
  )
}

export default App
const MainDiv = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  // background-color: grey;
  color: black;

  width: 80%;
  height: 80vh;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  // border: black solid 2px;
  width: 90%;
  height: 40vh;
}
  `