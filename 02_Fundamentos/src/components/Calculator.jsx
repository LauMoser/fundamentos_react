import { useState } from "react";

const Calculator = () => {

  const [valor, setValor]  = useState('')
  const [valor2, setValor2]  = useState('')

  const handleChange = (event) => {
    setValor(event.target.value);
  }

  const handleChange2 = (event) => {
    setValor2(event.target.value);
  }

  const handleSomar = () => {
    alert(Number(valor) + Number(valor2))
  }

  const handleSubtrair = () => {
    alert(Number(valor) - Number(valor2))
  }

  const handleMultiplicar = () => {
    alert(Number(valor) * Number(valor2))
  }

  const handleDividir = () => {
    alert(Number(valor) / Number(valor2))
  }

  return (
    <div>
      <p>A: <input type="number" value={valor} on onChange={handleChange}/></p>
      <p>B: <input type="number" value={valor2} on onChange={handleChange2}/></p>
      
      <div id="botoes">
        <button onClick={handleSomar}>Somar!</button>
        <button onClick={handleSubtrair}>Subtrair!</button>
        <button onClick={handleMultiplicar}>Multiplicar!</button>
        <button onClick={handleDividir}>Dividir!</button>
      </div>
    </div>
  )
}

export default Calculator