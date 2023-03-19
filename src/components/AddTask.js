import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd } from '../redux/action'

const AddTask = () => {
   const[add,setAdd] =useState()
   const dispatch=useDispatch()
   const handleSubmit=(e)=>{
    e.preventDefault()
    const newTodo={
        id:Math.random(),
        action:add,
        isDone:false,
    }
   dispatch(handleAdd(newTodo))
   }
  return (
    <div className>
      <div>
      <h2> todo-liste</h2> </div>
      <div className='todo'>
    <form onSubmit={handleSubmit}>
        <input type='text' value= {add} onChange={(e)=>setAdd(e.target.value)}/>
        <input type='submit' className='list'  value='Add' />
    </form>
    </div>
   
    
    </div>
  )
}

export default AddTask