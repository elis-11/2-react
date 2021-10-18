import React from 'react'
import "./MyInput.scss"

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className='MyInput' {...props} />
            
    )
})

export default MyInput
