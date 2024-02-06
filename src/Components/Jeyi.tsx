import React, { useState } from 'react'

interface FocusedStateType {
  [key: string]: boolean
}

const Jeyi: React.FC = () => {
  const [focusedState, setFocusedState] = useState<FocusedStateType>({})

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const name = e.target.name
    setFocusedState({ ...focusedState, [name]: true })
  }

  console.log({ focusedState })

  return (
    <form>
      <div>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' onFocus={handleFocus} />
        {focusedState.username && <span className='text-white'>Visited!</span>}
      </div>

      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' onFocus={handleFocus} />
        {focusedState.password && <span className='text-white'>Visited!</span>}
      </div>
    </form>
  )
}

export default Jeyi
