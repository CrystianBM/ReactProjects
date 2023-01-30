import React from 'react'

const Buttons = ({ setReqType }) => {
  return (
    <form className='buttonMenu' onSubmit={(e) => e.preventDefault()}>
        <button type='submit' className='button1' onClick={() => {setReqType('users')}}>Users</button>
        <button type='submit' className='button2' onClick={() => {setReqType('posts')}}>Posts</button>
        <button type='submit' className='button3' onClick={() => {setReqType('comments')}}>Comments</button>
    </form>
  )
}

export default Buttons