import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const FirstApp = ({value}) => {
  
  const [counter, setCounter] = useState( value )

  const handleAdd = () => {
    setCounter( counter +1)
    console.log('Añadir')
  }
  const handleSubstract = () => {
    console.log('Substraer')
    setCounter(counter - 1)
  }

const handleReset = () => {
    console.log('Resetear')
    setCounter(counter * 0)
  }
  
  return (
    <>
    <h1>Contando</h1>
    <span>{counter}</span>
    <button onClick={() => handleAdd()}> +1 </button>
    <button onClick = {()=> handleSubstract()}>-1</button>
    <button onClick = {()=> handleReset()}>Resetear</button>
    </>
  )
}

FirstApp.proptypes = {
  value: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
  value: 0
}

export default FirstApp