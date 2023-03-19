import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handleEdite } from '../redux/action';
const Edit = ({test}) => {
const[ text, setText]=useState(test.action)
const dispatch=useDispatch()
const handleSubmit=(e)=>{
    e.preventDefault();
const editeTaske={
    id :test.id,action:text ,isDone:test.isDone
}
dispatch(handleEdite(editeTaske))
closeModal()
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
}
Modal.setAppElement('#root');


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
   return (
    <div>
        <button onClick={openModal} className='ed'>Edit</button>
      <Modal
        isOpen={modalIsOpen}
     
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
           <from  className='test'>
        <input  className='input' type ='text' value={text} onChange={e=>setText(e.target.value)}/>
        <button onClick={handleSubmit} className='con'>confirme</button>
        <button onClick={closeModal} className='con' >cancel</button>
      </from>
      </div>
      </Modal>
   
    </div>
  )

}

  export default Edit