import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>FAQ section</h2>
      <ul>
        <li><button id='1'>Jakie są główne zalety Reacta?</button></li>
        <li><button id='2'>Czym jest JSX?</button></li>
        <li><button id='3'>Czym różni się state od props?</button></li>
        <li><button id='4'>Do czego służy hook useState?</button></li>
      </ul>
    </>
  )
}

export default App
