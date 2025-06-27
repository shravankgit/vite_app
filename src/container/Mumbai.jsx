import React from 'react'
import Kolkata from './Kolkata'

import { useData } from '../context/ExampleContext'

const Mumbai = ({ gift }) => {

  const { surprise } = useData()

  return (
    <div>
      Mumbaiii component starting
      <h2>My name is {surprise.captain} </h2>
      <Kolkata gift={gift} />
      <h6>Mumbaiii component ending</h6>
    </div>
  )
}

export default Mumbai