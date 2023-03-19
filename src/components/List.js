import React from 'react'
import { useSelector } from 'react-redux'
import CardList from './CardList'

const List = () => {
    const {todos}=useSelector(state=>state)
  return (
    <div>
{
    todos.map(el=><CardList task={el}/>)

}
    </div>
  )
}

export default List