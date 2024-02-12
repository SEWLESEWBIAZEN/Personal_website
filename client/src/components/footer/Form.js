import React from 'react'

const Form = () => {
  return (
    <form>
        <input type='text' placeholder='Type your name here..' name='name'/><br/>
        <input type='email' placeholder='Type your email here' name='email'/><br/>
        <input type='tel' placeholder='Type your phone here..' name='phone'/><br/>
        <textarea cols={25} rows={3} type='multilinetext' placeholder='Type your question here...' name='question'/>
    </form>
  )
}

export default Form