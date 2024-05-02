import { useState } from "react"
import UserInput from "./Components/UserInput"
import { calculateInvestmentResults } from "./util/investment";
import Results from "./Components/Results";

function App() {
  const [userInputs, setUserInputs] = useState([
    {identifier : "Initial Investment", value : null},
    {identifier : "Annual Investment", value : null},
    {identifier : "Expected Return", value : null},
    {identifier : "Duration", value : null}
  ]);


  function handleUserInput(identifier, value) {
    setUserInputs((prevInputs) => {
      let updatedInputs = [...prevInputs]
        updatedInputs = updatedInputs.map((item) => {
        if(item.identifier === identifier) {
          item.value = value
        }
        return item
      })
      return updatedInputs
  })    
  }

  let dataToCalculate = {
    initialInvestment : userInputs[0].value,
    annualInvestment : userInputs[1].value,
    expectedReturn : userInputs[2].value,
    duration : userInputs[3].value
  }

  console.log(dataToCalculate)
  
  let calculatedData = calculateInvestmentResults(dataToCalculate);
  console.log(calculatedData)
  
  return (
    <main>
      <header id= "header">
        <img src="investment-calculator-logo.png"/>
        <h1>Investment Calculator</h1>
      </header>
      <section id = "user-input">
        <div className = "input-group">
          <UserInput onUserInput = {handleUserInput} label = "Initial Investment"/>
          <UserInput onUserInput = {handleUserInput} label = "Annual Investment"/>
        </div>
        <div className = "input-group">
          <UserInput onUserInput = {handleUserInput} label = "Expected Return"/>
          <UserInput onUserInput = {handleUserInput} label = "Duration"/>
        </div>
        </section>
        <Results calculatedData = {calculatedData}/>
    </main>


  )
}

export default App
