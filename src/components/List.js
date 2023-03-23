import React from 'react'
import { useSelector } from 'react-redux'
import CardList from './CardList'

const List = () => {
    const {todos,filter}=useSelector(state=>state)
  return (
    <div>
 {filter
        ? todos
            .filter((el) => el.isDone === false)
            .map((el) => <CardList key={el.id} task={el} />)
        : todos.map((el) => <CardList key={el.id} task={el} />)}
    </div>
  )
}

export default List