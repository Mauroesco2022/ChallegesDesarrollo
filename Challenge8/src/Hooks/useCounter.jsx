import React from "react";
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const useCounter = (value) => { 

    const  [counter, setCounter] = useState( value )
  
    const handleAdd = () => {
      console.log('Añadir')
      setCounter( counter + 1)
    }
  
    const handleSubstract = () => {
      console.log('Substraer')
      setCounter(counter - 1)
  }
  
  const handleReset = () => {
      console.log('Resetear')
      setCounter(value * 0)
  }
  
    return {
        counter,
        increment: handleAdd,
        decrement: handleSubstract,
        reset: handleReset,
      
    }
  }