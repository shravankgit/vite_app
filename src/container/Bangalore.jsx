
import React from 'react'

import { useData } from '../context/ExampleContext'

const Bangalore = ({ gift }) => {

	const { surprise } = useData()
	return (
		<div> <h4>I am Bangalore,<span style={{ color: "red" }}>{surprise.game}</span> Recieved from Deihi</h4></div>
	)
}

export default Bangalore