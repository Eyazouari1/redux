import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd, handleFilter } from '../redux/action'

const AddTask = () => {
   const[add,setAdd] =useState("")
   const {filter}=useSelector((state)=>state)
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
    <button onClick={()=>dispatch(handleFilter())} className='task'>filter</button>
  
    </div>
    

 
   
    
    </div>
  )
}

export default AddTask