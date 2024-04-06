import React, { useState } from 'react'

function Testing() {
  const [className, setClassName] = useState('')

  const handleChange = (event: { target: { value: string } }) => {
    setClassName(event?.target?.value)
  }

  return (
    <div>
      <input
        type="text"
        value={className}
        onChange={handleChange}
        placeholder="Enter Tailwind classNames"
      />
      <div className={className}>
        This element will have dynamic styling based on your input.
      </div>
    </div>
  )
}

export default Testing
