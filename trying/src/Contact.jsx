import React from 'react'
import { useParams } from 'react-router'

const Contact = () => {
  const {num} = useParams()
  return (
    <div>Contact no is {num}</div>
  )
}

export default Contact