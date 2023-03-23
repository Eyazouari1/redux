import React from 'react'
import { useDispatch } from 'react-redux'
import {BiCheckSquare, BiTrash} from 'react-icons/bi'
import { handleComplete, handleDelete } from '../redux/action'
import Edit from './Edit'

const CardList = ({task}) => {
    const dispatch =useDispatch()
  return (
    <div  >
      <div className='butt'style={{display:'flex'}}>
    <div  ><h3 className={task.isDone?"title": null} > {task.action}</h3></div>
    <div className='file' > <button onClick={()=>dispatch(handleDelete(task.id)) } className='btn'><BiTrash/></button></div>
    <div ><button onClick={()=>dispatch(handleComplete(task.id))} className='comp' ><BiCheckSquare/></button></div>
    <Edit  test={task}/>
    </div>
   
    </div>
  )
}

export default CardList