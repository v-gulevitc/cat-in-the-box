/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

interface gameBoxProps{
  cat:boolean
}

export default function GameBox({cat,...props}:gameBoxProps) {
	const [Opened, setOpen] = useState(false)
	const [HasCat, setCat] = useState(cat)
	return (
		<>
			<button onClick={() => setOpen(true)} {...props}>Click me</button>
		</>
	)
}
