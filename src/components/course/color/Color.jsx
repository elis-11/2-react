import React, { useState } from 'react'
import '../Course.scss';
import { Input } from './Input';
import { Square } from './Square';

export const Color = () => {
  const [colorValue, setColorValue]= useState('')
  const [hexValue, setHexValue]= useState('')
  const [darkText, setDarkText]= useState(true)

  return (
    <div className="Color">
        Color
        <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        darkText={darkText}
        />
        <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        darkText={darkText}
        setDarkText={setDarkText}
        />
        </div>
  )
}
